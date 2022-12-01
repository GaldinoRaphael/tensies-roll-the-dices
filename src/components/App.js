import { useEffect, useState } from 'react';
import './App.css';
import Dice from './Dice'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


function App() {
  const [tenzies, setTenzies] = useState(false)
  const [dices, setDices] = useState(() => allNewDices());
  
  useEffect(()=>{
    const everyDiceIsHeld = dices.every(dice => dice.isHeld);
    const valuesOfArray = dices.map(dice => dice.value);
    const nonRepeatedValues = new Set(valuesOfArray);
    const allTheDicesHasSameValue = nonRepeatedValues.size === 1 ;

    setTenzies(everyDiceIsHeld && allTheDicesHasSameValue);
  }, [dices])

  useEffect(() => {
    tenzies && console.log("you won")
  }, [tenzies])

  function allNewDices(){
    const dices = [];

    for(let i = 0; i < 10;i++){
      dices.push({value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()})
    }
  
    return dices;
  }

  function rollDices(){
    setDices((oldDices) => oldDices.map(dice => dice.isHeld ? dice : {...dice, value: Math.ceil(Math.random() * 6)}))
  }

  function heldDice(event, id){
    event.stopPropagation();
    setDices(oldDices => oldDices.map(dice => dice.id === id ? {...dice, isHeld: true} : dice));
  }

  const diceElements =   dices.map(dice => <Dice number={dice.value} isHeld={dice.isHeld} key={dice.id} 
                                    id={dice.id} hold={heldDice} />)

  return (
    <div className="app">
      {tenzies && <Confetti />}
      <main>
        <h1 className='title'>Tenzies</h1>
        <h2 className='subtitle'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h2>
        <div className='dices'>
        {diceElements}
        </div>
        <button className='button' onClick={rollDices}>{tenzies ? "New Game" : "ROLL"}</button>
      </main>
    </div>
  );
}

export default App;
