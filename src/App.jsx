
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
 
  const [todos,setTodos] = useState([]);
   
  const addTodo =(todo)=>{
    setTodos((prev)=> [{id : Date.now(),...todo},...prev]);
  }
  
  const updatedTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo)=> (
      prevTodo.id === id ? todo : prevTodo
    )))
  }

  const toogleComplete = (id)=>{
      setTodos((prev)=> prev.map((prevTodo)=> prevTodo === id ? {...prevTodo,completed : ! prevTodo.completed } : prevTodo))
  }

  const deleteTodo = (id)=>{
     setTodos((prev) => prev.filter((todo)=> todo.id !== id));
  }

 useEffect(()=>{
    const todos =  JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
    else{
      console.log("there is no initial todos in local storage.")
    }
 },[])

  useEffect(()=>{
     localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toogleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
            <TodoItem /> 
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App
