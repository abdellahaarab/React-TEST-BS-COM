import './App.css';
import Cpmmunication from './Cpmmunication/Cpmmunication';
import LoginControl, { Validator } from './LoginControl';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



// import myJson from './exampl.json';
// console.log(myJson.person);
// console.log(myJson.person.name);
// console.log(myJson.person.country); 


function App() {
  return (
    <div className="container mt-5">
        <Cpmmunication/>
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={}/> */}
          <Route path='/LoginControl' element={<LoginControl/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
