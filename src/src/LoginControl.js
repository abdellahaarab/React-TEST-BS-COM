import React, { useState } from 'react'
import TextValidetPassword from './subCValid/TextValidetPassword'

// const test = function (p) {
//     if (p.length < 4) {
//         return { mss: "Password doit avoir au moins t 4 caractères", cl: "rouge" };
//     }

//     return { mss: "pass ok", cl: "vert" };
// }

function validet(pass=""){
    if(pass.length < 1){
        return(<TextValidetPassword color="empty p-2">This field cannot be empty.</TextValidetPassword>)
    }
    if(pass.length > 8){
        return(<TextValidetPassword color="long p-2">The password provided is not long enough.</TextValidetPassword>)
    }
    if (pass.length < 4){
       return(<TextValidetPassword  color="rouge p-2">Password doit avoir au moins t 4 caractères</TextValidetPassword>)
    }else{
        return(<TextValidetPassword color="aqua aqua p-2">The password provided is not long enough.</TextValidetPassword>)
    }   
}

function Confirme(newpass='',pass){
    // console.log(pass)
    if(newpass ===  pass && newpass.length >= 4){
        return(<TextValidetPassword color="aqua p-2">The password conforme </TextValidetPassword>)
    }
    else{
        return(<TextValidetPassword color="rouge p-2">The password non conforme</TextValidetPassword>)
    }  
}


export default function LoginControl() {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    
    return (
        <div>
            <div className='input-group m-1'>
                <label className='input-group-text'>Entrer votre password: </label> 
                <input className='form-control' type="password" value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div> 
            <div className='input-group m-1'>
                <label className='input-group-text'>Confir votre password: </label> 
                <input className='form-control' type="password"
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                />
            </div>           
            <div className='alert'>{passwordConfirm?Confirme(passwordConfirm,password):validet(password)}</div>

        </div>)
}
