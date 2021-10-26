import { Fragment } from 'react';
import Header from './components/Layout/Header';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Specialty from './components/Specialty/Specialty';
import Footer from './components/Footer/Footer'

function App() {
  return (
 
 <div>
      <Header />
      <Home/>
    <Footer/>
       </div>  
      
      /*   <div>
         <Header />
         <Specialty/>
       </div>  */
  );
}

export default App;
