import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setDisplay] = useState('')
  const showDisplay=(value)=>{
    setDisplay((prev)=>prev+value);
  };
  const Calculate=()=>{
    try{
      setDisplay(eval(display).toString());
    }catch{
      setDisplay('error');``
    }
  };
  const allClear=()=>{
      setDisplay('')
  };
  const deleteLast=()=>{
    setDisplay(display.slice(0,-1));
  }

  return (
    <>
      <div id='calculator'>
           <h1>CALCULATOR</h1>
           <input id='display' value={display} readOnly/>
           <div className='calculator-keys'>
            <button onClick={()=>showDisplay('7')}>7</button>
            <button onClick={()=>showDisplay('8')}>8</button>
            <button onClick={()=>showDisplay('9')}>9</button>
            <button className='operator' onClick={()=>showDisplay('+')}>+</button><br />
            <button onClick={()=>showDisplay('4')}>4</button>
            <button onClick={()=>showDisplay('5')}>5</button>
            <button onClick={()=>showDisplay('6')}>6</button>
            <button className='operator' onClick={()=>showDisplay('-')}>-</button><br />
            <button onClick={()=>showDisplay('1')}>1</button>
            <button onClick={()=>showDisplay('2')}>2</button>
            <button onClick={()=>showDisplay('3')}>3</button>
            <button className='operator' onClick={()=>showDisplay('*')}>*</button><br />
            <button onClick={()=>showDisplay('0')}>0</button>
            <button onClick={()=>showDisplay('.')}>.</button>
            <button onClick={deleteLast}>Del</button>
            <button className='operator' onClick={()=>showDisplay('/')}>/</button><br />
            <button className='all-clear' onClick={allClear}>AC</button>
            <button className='equal-sign'  onClick={Calculate}>=</button>
           </div>
       </div>
    </>
  )
}

export default App
