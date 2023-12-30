import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("gray");

  return (
    
    <div className='h-screen w-full duration-200'
     style={{backgroundColor : color}} >

       <div className='flex fixed flex-wrap justify-center bottom-10 inset-x-0'>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "red"}}
                onClick={()=> setColor("red")} 
             >red</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "green"}}
                onClick={()=> setColor("green")} 
             >green</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "violet"}}
                onClick={()=> setColor("violet")} 
             >violet</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "brown"}}
                onClick={()=> setColor("brown")} 
             >brown</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "cyan"}}
                onClick={()=> setColor("cyan")} 
             >cyan</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "orange"}}
                onClick={()=> setColor("orange")} 
             >orange</button>
           </div>
          <div className='flex flex-wrap py-1 gap-3 justify-center shadow-lg bg-white rounded-xl'>
               <button className='outline-none px-2 text-white shadow-lg rounded-full'
                style={{backgroundColor : "black"}}
                onClick={()=> setColor("black")} 
             >black </button>
           </div>
        </div>
    </div>
  )
}

export default App
