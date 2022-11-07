import './Modifier.css'
import React, { useState } from 'react'

function Modifier(props) {
  const [newValue_Nom,setnewValue_Nom] = useState('')
  const [newValue_Type,setnewValue_Type] = useState('')
  const [Value_rechercher,setValue_rechercher] = useState('')

  function update(indexNOM){
    for (let index = 0; index < props.list_Par_type.length; index++) {
       const element = props.list_Par_type[index];
       if(element.nom.toLowerCase() === indexNOM.toLowerCase()){
         props.list_Par_type.splice(index,1)
         props.list_Par_type.push({"nom":newValue_Nom,"type":newValue_Type})
       }
    }console.log(props.list_Par_type)
  }

  return (
    <div>
        <p>Entrer les Donneer pour rechercher :</p>
        <input className='form-control m-2' type="text" 
                onChange={(e)=> setValue_rechercher(e.target.value)}
                placeholder="Nome"
            ></input>
        <p>Entrer les Donneer pour Modifier :</p>
        <div className="d-flex">
            <input className='form-control m-2' type="text" 
                onChange={(e)=>setnewValue_Nom(e.target.value)}
                placeholder="Nome"
            ></input>
            <input className='form-control m-2' type="text" 
                onChange={(e)=>setnewValue_Type(e.target.value)}
                placeholder="Type"
            ></input>
        </div>
    
        <button onClick={()=>update(Value_rechercher)} 
            className="btn btn-danger my-2">Modifier</button>
    </div>
  )
}

export default Modifier