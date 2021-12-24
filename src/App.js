import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import IncrementButton from './components/IncrementButton.component.jsx';
import Counter from './components/Counter.component.jsx';
import dogsApi from './api.js';

function App() {

  const [dogImgSrc, setDogImgSrc] = useState('');

  useEffect(() => {
    getNextImage();
  }, []);

  const getNextImage = async () => {
    try {
      const { data } = await axios.get(dogsApi);
      setDogImgSrc(data.message);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Counter type="negative" />
      <Counter type="positive" />
      <img src={dogImgSrc} alt="animal-picture" width="500" />
      <IncrementButton type="negative" nextImage={getNextImage} />
      <IncrementButton type="positive" nextImage={getNextImage} />
    </div>
  );
}

export default App;