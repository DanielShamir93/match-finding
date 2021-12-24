import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import IncrementButton from './components/incrementButton/IncrementButton.component.jsx';
import Counter from './components/counter/Counter.component.jsx';
import dogsApi from './api.js';
import { INCREMENT_NEGATIVE, INCREMENT_POSITIVE } from './store/actions/actionsTypes.js';
import { FcLike, FcDislike } from "react-icons/fc";

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
      <div className="counter">
        <Counter actionType={INCREMENT_NEGATIVE} reactIconComponent={<FcDislike className="react-icon"/>} />
        <Counter actionType={INCREMENT_POSITIVE} reactIconComponent={<FcLike className="react-icon"/>} />
      </div>
      <figure className="dog-image" style={{backgroundImage: `url(${dogImgSrc})`}}alt="dog-image" ></figure>
      <div className="increment-buttons">
        <IncrementButton actionType={INCREMENT_NEGATIVE} nextImage={getNextImage} />
        <IncrementButton actionType={INCREMENT_POSITIVE} nextImage={getNextImage} />
      </div>
    </div>
  );
}

export default App;