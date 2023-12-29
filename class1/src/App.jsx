import { useState } from 'react'

import './App.css'

function App() {
  let [count,setCount] = useState(0);
  const addValue = ()=>{
    if(count<20){
      count = count + 1;
      setCount(count);
    }
  }
  const subValue = ()=>{
    if(count>0){
      count = count - 1 ;
      setCount(count);
    }
  }
  return (
    <>
      <h1>Pema at mid-night</h1>
      <h2>counter value : {count}</h2>
      <button className='btn'  onClick={addValue}>add value</button>
      <button  className='btn' onClick={subValue}>sub value</button>
    </>
  )
}

export default App
