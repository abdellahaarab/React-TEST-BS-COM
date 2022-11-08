import { useState } from 'react';
import './Suprime.css'

function Suprime(props) {
  const [newValue_NomSUPRIME,setnewValue_NomSUPRIME] = useState('')
  return (
    <div>   
            <p>Entrer les Donneer pour Suprime :</p>
            <input className='form-control m-2' type="text" 
                onChange={(e)=>setnewValue_NomSUPRIME(e.target.value)}
                placeholder="Nome"
            ></input>
    
            <button onClick={()=>props.suprimeFromList(newValue_NomSUPRIME)} 
                    className="btn btn-danger my-2">Suprime</button>
    </div>
  )
}

export default Suprime