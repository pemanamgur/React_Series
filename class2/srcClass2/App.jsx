

import Start from "./Start";

function App() {
  const name = "Pema Namgur Tamang";
  return (
    <>
    <p>Hello welcome to my project in react | {name}</p>   //evaluated expression 
    {/* <p>Hello welcome to my project in react | {if(true) name }</p>// we cant write E.E like this  */}
    <Start />
    </>
  )
}

export default App;
