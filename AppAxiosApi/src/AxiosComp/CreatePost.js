import axios from 'axios'
import React, { useState } from 'react'



function CreatePost() {
    const [Title,setTitle] = useState('')
    const [Body,setBody] = useState('')

    function create_post(){
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:Title,
        body:Body
    })
    .then((res)=>{
        console.log(res.data)
    })
}

  return (
    <div>
        <h1>Create Post</h1>
        <input type="text" placeholder='Title' onChange={(evn)=> setTitle(evn.target.value)}/>
        <input type="text" placeholder='Body' onChange={(evn)=> setBody(evn.target.value)}/><br></br>
        <button onClick={create_post}>Create Post</button>
    </div>
  ) 
}

export default CreatePost