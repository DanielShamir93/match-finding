import './styles/App.css';
import IncrementButton from './components/IncrementButton.component.jsx';
import Counter from './components/Counter.component.jsx';

function App() {
  return (
    <div className="App">
      <Counter type="negative" />
      <Counter type="positive" />
      <img src="" alt="" />
      <IncrementButton type="negative" />
      <IncrementButton type="positive" />
    </div>
  );
}

export default App;