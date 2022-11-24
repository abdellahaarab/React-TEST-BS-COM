import React from 'react'



function FetchComp() {
  async function data(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log(data)
    }
  return (
    <div>
        {data}
    </div>
  )
}

export default FetchComp