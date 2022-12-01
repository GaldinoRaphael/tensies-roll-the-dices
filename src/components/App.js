import { useState } from 'react';
import './App.css';
import Dice from './Dice'
import { nanoid } from 'nanoid';



function App() {
  const [dices, setDices] = useState(() => allNewDices());

  function allNewDices(){
    const dices = [];

    for(let i = 0; i < 10;i++){
      dices.push({value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()})
    }
  
    return dices;
  }

  function rollDices(){
    setDices(() => allNewDices())
  }

  function heldDice(event, id){
    event.stopPropagation();
    console.log(dices)
    setDices(oldDices => oldDices.map(dice => dice.id === id ? {...dice, isHeld: true} : dice));
  }
  
  const diceElements =   dices.map(dice => <Dice number={dice.value} isHeld={dice.isHeld} key={dice.id} 
                                    id={dice.id} hold={heldDice} />)

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
