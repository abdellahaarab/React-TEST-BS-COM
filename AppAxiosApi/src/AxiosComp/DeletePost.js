import axios from 'axios'
import React, { useState } from 'react'



function DeletePost() {
    const [id,setid] = useState('')

    function delete_post(){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
        console.log("Post deleted !!")
        console.log(res)
    })
}

  return (
    <div>
        <h1>Delete Post</h1>
        <input type="text" placeholder='id' onChange={(evn)=> setid(evn.target.value)}/><br></br>
        <button onClick={delete_post}>Delete Post</button>
    </div>
  ) 
}

export default DeletePost