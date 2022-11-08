import React from "react";
function E2(props){
   return(
     <>
        {
           props.tabl.map((LM,i)=>LM%2===0?<p key={i}>{LM} - element pair</p>:<p key={i}>{LM} - element impair</p>) 
        }
     </>
   )
}

export default E2
