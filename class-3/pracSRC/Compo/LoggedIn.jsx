import React from 'react'

function LoggedIn() {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input className='rounded-lg bg-gray-200' type="text" name="name" id="name" /> <br /><br />
        <label htmlFor="password">Pass:</label>
        <input className='rounded-lg bg-gray-200' type="text" name="password" id="password" />
        <br />
         <button className='bg-cyan-500 rounded-xl mt-2 px-2' type="submit">log in</button>
      </form>
    </div>
  )
}

export default LoggedIn;
