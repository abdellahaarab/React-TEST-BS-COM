import React from 'react'
// function recherchMesage(Cle){
//   console.log(Cle)
// }
function Form(props) {
  return (
    <div>
        <div>Entrer le mot cle de rechercher :</div>
        <input className='form-control mt-2' type="text" 
        onChange={(e)=>props.setCle(e.target.value)}
        ></input>
        {/* <button onClick={(e)=>{props.recherch(props.cle)}} className="btn btn-info my-3">Recherch</button> */}
    </div>
  )
}

export default Form