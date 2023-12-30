import { useState } from 'react'
import './App.css'
import Mybutton from './Compo/Mybutton'
import Admin from './Compo/Admin'
import LoggedIn from './Compo/LoggedIn'
import List from './Compo/List'

function App() {
   const loggedIn = false;
   let content;
  //  if(loggedIn){
  //   content = <Admin />
  //  } 
  //  else{
  //   content = <LoggedIn />
  //  }

  return (
    <>
     <h2 className='text-2xl text-center font-bold  text-white  h-screen w-full duration-200' style={{backgroundColor : "#212121" }}>
      <Mybutton />
      <List />
      {/* {content} */}

      {/* <div>
        {
          loggedIn ? (<Admin/>) :( <LoggedIn/>)
        }
      </div> */}
      
     </h2>
    </>
  )
}

export default App
