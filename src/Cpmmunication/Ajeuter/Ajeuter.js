import './Ajeuter.css'
import React, { useState } from 'react'



function Ajeuter(props) {
  const [newValue_Nom,setnewValue_Nom] = useState('')
  const [newValue_Type,setnewValue_Type] = useState('')
  return (
    <div>
        Entrer les Donneer pour Ajeuter :
        <div className="d-flex">
        <input className='form-control m-2' type="text" 
            onChange={(e)=>setnewValue_Nom(e.target.value)}
            placeholder="Nom"
        ></input>
        <input className='form-control m-2' type="text" 
            onChange={(e)=>setnewValue_Type(e.target.value)}
            placeholder="Type"
        ></input>
        </div>
        <button onClick={()=>props.addTolist({"nom":newValue_Nom , "type":newValue_Type})} className="btn btn-danger my-2">Ajeuter</button>
    </div>
  )
}

export default Ajeuter