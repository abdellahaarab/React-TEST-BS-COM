import React from 'react'
import "./TextValidetPassword.css"

function TextValidetPassword(props) {
  return (
    <div className={props.color}>
        {props.children}
    </div>
  )
}

export default TextValidetPassword