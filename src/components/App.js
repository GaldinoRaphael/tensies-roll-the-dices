import { useState } from 'react';
import './App.css';
import Dice from './Dice';



function App() {
  function allNewDices(){
    const numbers = [];
    for(let i = 0; i < 10;i++){
      numbers.push(Math.ceil(Math.random() * 6))
    }
  
    return numbers;
  }

  function rollDices(){
    setDices(() => allNewDices())
  }

  const [dices, setDices] = useState(() => allNewDices());
  
  
 const diceElements =   dices.map(number => <Dice number={number} />)

  return (
    <div className="app">
      <main>
        <h1 className='title'>Tenzies</h1>
        <h2 className='subtitle'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
        <div className='dices'>
        {diceElements}
        </div>
        <button className='button' onClick={rollDices}>ROLL</button>
      </main>
    </div>
  );
}

export default App;
