import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyFun(){
    return (
        <div>
            <h1>I am a function</h1>
        </div>
    )
}
/*
const createElement = {
    type : 'a',
    props :{
           href : 'https://www.google.com',
           target : '_blank'
    },
    children : 'click me to go to google'
}
   */

const anotherName = "Pema Namgur Lama";

 const createElement = React.createElement(  //babble inject it automatically in react
    'a',
    {href : "https://www.google.com", target : "_blank"},
    'click to go google',
    anotherName,
    // if(anotherName){hello},         //only evaluated experssion we can't write condition
 )

const reactObj = (
    <a href="https://google.com" target='_blank'>google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <createElement />         // you can't do this because we have made a custom react in previous;
        createElement
    // <App />
    // < MyFun />   
    // MyFun()    //Not a good practice and it is just a function
    // reactObj       //this works 

  
)
