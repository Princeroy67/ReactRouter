import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
   /* const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Princeroy67')
        .then(response=> response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])*/
  return (
    <div className='text-center m-5 bg-gray-600 text-white p-5 text-3xl'>Github followers : {data.followes}
    <img src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader =async()=>{
const response =await fetch('https://api.github.com/users/Princeroy67')

return response.json()
}