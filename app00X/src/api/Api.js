import React from 'react'

function Api() {
 
  async function data(){
        var response = await fetch('https://api.jikan.moe/v4/random/anime')
        var d = await response.json()
        console.log(d.data)
  }

  data()

  return (
    <div>
        Api
    </div>
  )
}

export default Api