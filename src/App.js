import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Matches from './components/Matches/Matches.js';
import Standings from './components/Standings/Standings.js';
import Homepage from './components/Homepage/Homepage';
import Login from './login/login';
import Register from './register/register';
import Venues from './components/Venues/Venues';
function App() {
  
  return (

<>

<Routes>

    
    <Route path = '/' element = {<Homepage/>}/>
    <Route path = 'Standings' element = {<Standings/>}/>
    <Route path = 'Matches' element = {<Matches/>}/>
    <Route path = 'login' element = {<Login/>}/>
    <Route path = 'Register' element = {<Register/>}/>
    <Route path = 'Venues' element = {<Venues/>}/>
    
  </Routes>




 

</>
 );
}

export default App;
