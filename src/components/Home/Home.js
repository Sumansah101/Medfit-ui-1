import { Fragment } from 'react';
import Dermatology from '../../assets/Dermatology.jpg'
import GenPhysician from '../../assets/general_physician.jpg'
import ENT from '../../assets/ENT.jpg'
import Ortho from '../../assets/Ortho.jpg'
import Paediatric from '../../assets/Paediatric.jpg'
import Ophthal from '../../assets/Opthal.jpg'
import Sexologist from '../../assets/Sexologist.jpg'
import Urology from '../../assets/Urology.jpg'
import PhysioTheraphy from '../../assets/PhysioTheraphy.jpg'
import Dental from '../../assets/Dental.jpg'
import classes from './Home.module.css'

import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Home = () => {
  const history=useHistory()
  const SpecialtyData=[
    {'name':'Dermatology',imgSrc:Dermatology,link:''},
    {'name':'GenPhysician',imgSrc:GenPhysician,link:''},
    {'name':'ENT',imgSrc:ENT,link:''},
    {'name':'Ortho',imgSrc:Ortho,link:''},
    {'name':'Paediatric',imgSrc:Paediatric,link:''},
    {'name':'Sexologist',imgSrc:Sexologist,link:''},
    {'name':'Urology',imgSrc:Urology,link:''},
    {'name':'PhysioTheraphy',imgSrc:PhysioTheraphy,link:''},
    {'name':'Dental',imgSrc:Dental,link:''},
    {'name':'Ophthal',imgSrc:Ophthal,link:''}
    
  ]


  return (
    <Fragment>
      <Router>
    

        <div className="card">
        <div className="card-body">
            <p className={classes.spl}>Specialists</p>
            <p className={classes.subtitle}>Consult with top Doctors</p>
            <div className="container">
                <div className="row ">
                  {
                    SpecialtyData.map((spl,index)=>
                   
                        <div className={classes.col} key={index} onClick={()=>{history.push('/speciality/'+spl.name)}}>
                          
                            <div className="card" style={{width: "11rem"}}>
                            <img className="card-img-top" src={spl.imgSrc} alt={spl.name}/>
                    
                            </div>
                      
                        </div>
                      
                    )
                  }
                </div>
                
              </div>            
                 
        </div>
      </div>
 
      </Router>
    </Fragment>
  );
};

export default Home;
