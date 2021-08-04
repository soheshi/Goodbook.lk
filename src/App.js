
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Na from './Components/Nav';
import Jumbo from './Components/Mainsection';
import Availablebooks from './Components/Availablebooks';
import Footer from './Components/Footer';
import AddNew from './Components/AddNew';


function App() {
  return (
    <div classname="App">
       
       <Na/> 
       <Jumbo/>
       
       <br/>
       <br/>
       <Availablebooks/><br/>
       
       <AddNew/>
       <br/>
       
       
       <Footer/>
       
    </div>

   );
  }
 
  
export default App;

