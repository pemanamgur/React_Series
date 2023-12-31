import React, { useState } from 'react'

function Form() {
    let [text , setText] = useState('');
  return (
   <>
   <input value={text} onChange={e => setText(e.target.value) } />
   <p> Hello ,{text}</p>
   </>
  )
}

export default Form;
