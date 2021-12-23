import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import IncrementButton from './components/IncrementButton.component.jsx';
import Counter from './components/Counter.component.jsx';
import dogsApi from './api.js';

function App() {

  const [dogImgSrc, setDogImgSrc] = useState('');
  const [nextImg, setNextImg] = useState(0);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(dogsApi);
      setDogImgSrc(data.message);
    }
    search();
  }, [nextImg]);

  const getNextImg = () => {
    setNextImg(nextImg + 1);
  }

  return (
    <div className="App">
      <Counter type="negative" />
      <Counter type="positive" />
      <img src={dogImgSrc} alt="animal-picture" width="500" />
      <IncrementButton type="negative" nextImg={getNextImg}/>
      <IncrementButton type="positive" nextImg={getNextImg}/>
    </div>
  );
}

export default App;