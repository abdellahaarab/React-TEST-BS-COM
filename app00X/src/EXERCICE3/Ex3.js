import './Ex3.css'
import React, { Component, useState } from 'react'

const produits = 
[
    {"ref":"p1","libelle":"SMRE","prix":545,"stock":5600,"autres":{"categorie":"électrménager","TTVA":"20%"}},
    {"ref":"p2","libelle":"SMRE","prix":545,"stock":5600,"autres":{"categorie":"électrménager","TTVA":"20%"}},
    {"ref":"p3","libelle":"SMRE","prix":545,"stock":5600,"autres":{"categorie":"électrménager","TTVA":"20%"}},
    {"ref":"p4","libelle":"SMRE","prix":545,"stock":5600,"autres":{"categorie":"électrménager","TTVA":"20%"}},
]

function AfficherlesProduts(){
   return produits.map((elm,i)=><li key={i}>Ref : {elm.ref} | libelle : {elm.libelle} | stock : {elm.stock} | categorie : {elm.autres.categorie} </li>)   
}


function AfficherlesProdutsParCategorie(categorie){
    produits.map((e,index)=>{
        if(e.autres.categorie === categorie){
            return produits.map((elm,i)=><li key={i}>Ref : {elm.ref} | libelle : {elm.libelle} | stock : {elm.stock} | categorie : {elm.autres.categorie} </li>)
        }
    })
 
 }


class Ex3 extends Component
{
  constructor(){
     super()
     this.value = ""
  }
    setvalue(param) {
        return this.value = param
    }
  render(){
    console.log(this.value)
    return (

        <div>
           <a href=''>Afficher les produts</a><br/>
            <input type="text" onChange={((event)=>{this.setvalue(event.target.value)})} /><br/>
           <a href='' onClick={ AfficherlesProdutsParCategorie(this.value)}>Afficher les produts par categorie</a><br/>
           <ul>
              { 
                AfficherlesProduts ? AfficherlesProduts() : AfficherlesProduts()
              }
           </ul>
        </div>
    )
  }
}

export default Ex3