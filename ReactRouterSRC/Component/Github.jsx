import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
//   const [userid , setUserId] = useState([]);

//   const {usId} = useParams();
//    useEffect(()=>{
    
//    fetch('https://api.github.com/users/pemanamgur')
//    .then((res)=> res.json())
//    .then((data)=> {
//        console.log(data)
//        setUserId(data)
//    }) 
//    },[]);
    
  return (
    <div className='text-xl grid grid-cols-2  bg-gray-500 text-white text-center p-2 rounded-md font-bold'>
        <div className='flex justify-center flex-col items-center w-full bg-violet-400 '>
      Github id : {data.id}
        </div>
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;

export const githubInfo = async ()=>{
        const res = await fetch('https://api.github.com/users/pemanamgur');
        return res.json();
}