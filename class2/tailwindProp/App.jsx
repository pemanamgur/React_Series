import { useState } from 'react'
import './App.css'
import Card from '../Component/Card'

function App() {
  const [count, setCount] = useState(0)
const myObj ={
  name : "Pema",
  description : "Im gonna be a best developer in the furture",
  greet :"Thank you"
}
const myObj2 ={
  name : "Pema777",
  description : "Im gonna be a best developer in the future.",
  greet :"Thank you."
}
const myArr = [1,2,3];
const myArr2 = [3,4,5];
  return (
    <> 
    < Card arrInfo={myArr} objInfo={myObj}/>
    < Card arrInfo={myArr2} objInfo={myObj2}/>
    </>
  )
}

export default App
