import React, { useState } from 'react'


function createInitialTodoList(){
    let todoLists = [];
    for(let i = 0 ; i < 3 ; i++){
        todoLists.push({id : i , items : 'items' + (i + 1)});
    }
    console.log(todoLists);
    return todoLists;
}


function TodowithoutInitFun() {

    let [todos,setTodos] = useState(createInitialTodoList()); // always re-render when input is onchanged 
    let [text , setText] = useState('');
  return (
    <div>
      
      <label htmlFor="todo">Todos</label><br />
      <input type="text" value={text} onChange={e => 
        {setText(e.target.value)}} />
      <button onClick={()=>{
       setText('');
       setTodos([{
        id : todos.length,
        items : text
       },...todos]); 
      }} className='bg-blue-500 text-white rounded-lg px-2 outline-none '>Add</button>
       <ul>
        {
           todos.map(item =>
            (
                <li key={item.id}>{item.items}</li>
            ) 
        )   
        }
       </ul>
    </div>
  )
}

export default TodowithoutInitFun;
