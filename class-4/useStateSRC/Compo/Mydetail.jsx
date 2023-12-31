import React from 'react'
import { useState } from 'react'

function Mydetail() {
  // const [name , setName] = useState("Pema");
  // let [age , setAge] = useState(21);
//   const [todos , setTodos] = useState(()=>createTodos());

  //using reference Funciton
//   function handleMultiply(){
//     age = age * 2;
//     setAge(age);
//     // console.log("age is clicked" , age);
//   }

//without using updater function

//   function handleMul(){
//         setAge(age + 2); 
//    }

// //   using updater functon
//     function  handleUpdMul(){
//         setAge(a => a*2);
     
//     }




//Changing a state of Obj : Basic

// const form = {
//     f_name : "Pema",
//     age : 21,
//     faculty : "CSIT"
// }
// form.f_name = "It changes the first form too so dont use it"

// const updatedForm = {
//     ...form,
//     f_name : "Changed"
// }
// console.log(form);
// console.log(updatedForm);



// let [form , setForm] = useState({
//   firstName : "Pema",
//   lastName  : "Tamang",
//   email : "pemanamgurtamang7@gmail.com"
// });

// const handleChange = (e)=>{         //It works but dont use cuz it dont change outside the input
//   // console.log(e.target)
//   // console.log(e.target.value)
//   setForm({
//     ...form,
//     email : e.target.email
//   })
// }


  return (
    <div style={{color : "black" }}>
         {/* <h1 className='bg-green-700 '>multipliedValue : {age}</h1>      */}
         {/* <button onClick={handleMultiply} className='bg-cyan-400'>multiply</button> */}

         {/* <button onClick={()=>{
            // handleMul();
            // handleMul();
            // handleMul();
         }} className='bg-cyan-400'>multiply</button> */}

         {/* <button onClick={()=> */}
            {/* // handleUpdMul() */}
            
            {/* // } className='bg-cyan-400'>multiply</button> */}
 
{/*       
        <label htmlFor="">First Name : </label>
        <input type="text" value={form.firstName} onChange={e=>{
              setForm({
                   ...form,
                   firstName : e.target.value
        })
        }} />
        <label htmlFor="">Last Name : </label>
        <input type="text" value={form.lastName} onChange={e=>{
          setForm({
            ...form,
           lastName : e.target.value
          })
        }}/>
         <label htmlFor="">Email :</label>  
         <input type="email" value={form.email} onChange ={e=>{
          setForm({
            ...form,
            email : e.target.value
          })
         }}/>

         <h1>{form.firstName} {' '} {form.lastName} {' '} {form.email} {' '}</h1> */}
     </div>
    
  )
}

export default Mydetail
