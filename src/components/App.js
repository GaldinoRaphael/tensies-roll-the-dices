import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="app">
      <main>
        <h1 className='title'>Tenzies</h1>
        <h2 className='subtitle'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
        <Dice number="1" />
        <button className='button'>ROLL</button>
      </main>
    </div>
  );
}

export default App;
