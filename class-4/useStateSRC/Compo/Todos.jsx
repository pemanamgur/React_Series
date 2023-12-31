import React, { useState } from 'react'



function Todos() {

    let [todos,setTodos] = useState(createTodoList); //initializer function only run during initialization and dont run while component re-render
    let [text , setText] = useState('');



    function createTodoList(){
        let todoLists = [];
        for(let i = 0 ; i < 50 ; i++){
            todoLists.push({
                id : i,
                items : 'item' + (i + 1 ),
            })
        }
        // console.log(todoLists);
        return todoLists;
    
    }



  return (
    <div>
     <label htmlFor="">Add Todos :</label>
     <input type="text" value={text} onChange={e=> setText(e.target.value)} />
     <button className='bg-cyan-600 rounded-xl px-2 py-1 ml-2 text-white' onClick={
        ()=>{
            setText('');
            console.log(todos.length)
            setTodos([{
                id : todos.length,                   //we are adding new items in array without missing the prev value
                items : text
            },...todos]);                         
        }
     }>Add</button>
     <ul>
        { 
         todos.map(item=>(
            <li key={item.id}>{item.items}</li>
            ))
        }
     </ul>
    </div>
  )
}

export default Todos
