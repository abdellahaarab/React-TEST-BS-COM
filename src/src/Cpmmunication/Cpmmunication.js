import React, { useState } from 'react'
import Ajeuter from './Ajeuter/Ajeuter';
import Suprime from './Suprime/Suprime';
import Modifier from './Modifier/Modifier';
import './Cpmmunication.css'
import List from './subcomponant/list';
import Form from './subform/form';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import list from './list.json';
var list_Par_type=list;

function recherch(index){
    var listNome =  list_Par_type.filter((i)=>i.type === index)
    return listNome
}

function addTolist(value){
   if (value.nom !== '' && value.type !== ''){
    list_Par_type.push(value)
    console.log(list_Par_type)
    // window.location.reload(false);
   } 
}

function suprimeFromList(indexNOM){
   for (let index = 0; index < list_Par_type.length; index++) {
      const element = list_Par_type[index];
      if(element.nom.toLowerCase() === indexNOM.toLowerCase()){
        list_Par_type.splice(index,1)
      }
      
   }
   console.log(list_Par_type)
}

console.log(list_Par_type)

function Cpmmunication() {
  const [cle,setCle] = useState('')
  return (
    <div>
        <NavbarLinks/>
        <Ajeuter addTolist={addTolist}/>
        <Suprime suprimeFromList={suprimeFromList}/>
        <Modifier list_Par_type={list_Par_type}/>
        {/* <BrowserRouter>
        <Routes>
          <Route path='/Ajeuter' element={<Ajeuter addTolist={addTolist}/>}/>
          <Route path='/Suprime' element={<Suprime suprimeFromList={suprimeFromList}/>}/>
          <Route path='/Modifier' element={<Modifier list_Par_type={list_Par_type}/>}/>
        </Routes>
        </BrowserRouter> */}
        <Form setCle={setCle} recherch={recherch} cle={cle}/>
        <List data = {recherch(cle)} allData={list_Par_type}/> 
    </div>
  )
}

export default Cpmmunication