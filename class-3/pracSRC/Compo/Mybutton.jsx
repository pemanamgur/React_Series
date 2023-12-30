import React from 'react'

function Mybutton() {
  const handleClick = ()=>{
    alert("You clicked me");
  }
  return (
    <>
    <button onClick={handleClick} className='bg-violet-400 rounded-xl px-2 '>Hello Im button</button>
       
    </>

  )
}

export default Mybutton;