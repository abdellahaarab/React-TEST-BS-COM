import axios from 'axios'
import React, { useState } from 'react'



function UpdatePost() {
    const [Title,setTitle] = useState('')
    const [Body,setBody] = useState('')
    const [id,setid] = useState('')

    function update_post(){
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        title:Title,
        body:Body
    })
    .then((res)=>{
        console.log(res.data)
    })
}

  return (
    <div>
        <h1>Update Post</h1>
        <input type="text" placeholder='id' onChange={(evn)=> setid(evn.target.value)}/>
        <input type="text" placeholder='Title' onChange={(evn)=> setTitle(evn.target.value)}/>
        <input type="text" placeholder='Body' onChange={(evn)=> setBody(evn.target.value)}/><br></br>
        <button onClick={update_post}>Update Post</button>
    </div>
  ) 
}

export default UpdatePost