import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
 

const Github = () => {
    const data = useLoaderData()
    // const [data,setdata] = useState([])
    // useEffect(() =>{
    // fetch('https://api.github.com/users/400-20')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setdata(data)
    // })
    // },[])
  return (
      <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
  <img src={data.avatar_url} alt='gitPic' />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus a quia vero saepe incidunt illum nisi consequuntur in repudiandae numquam maxime excepturi, maiores impedit.
      </>
  )
}

export default Github

export const githubInfo = async() => {
    const response = await fetch ('https://api.github.com/users/400-20')
    return response.json()

}



