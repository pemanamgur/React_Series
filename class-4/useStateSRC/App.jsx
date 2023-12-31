import { useState } from 'react'

import './App.css'
import Mydetail from './Compo/Mydetail'
import Todos from './Compo/Todos'
import TodowithoutInitFun from './Compo/TodowithoutInitFun'

import Form from './Compo/Form'
function App() {

  let [version , setVersion] = useState(0)

 function handleClick(){
  setVersion(version + 1);
  // console.log(version);
}
console.log(version);


  return (
    <>
   <div className='h-screen w-full duration-200 ' style={{backgroundColor : "violet"}}>
   {/* < Mydetail /> */}
   {/* <Todos /> */}
   {/* < TodowithoutInitFun / > */}
   <button onClick={handleClick}>reset</button>
   <Form key={version}/>
    </div>     
  
    </>
  )
}

export default App
