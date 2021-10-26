import { Fragment } from 'react';
import Dermat from '../../assets/Dermat.jpg'
import Physician from '../../assets/physician.jpg'
import ENT from '../../assets/ENT.jpg'
import Ortho from '../../assets/Ortho.jpg'
import Paediatric from '../../assets/Paediatric.jpg'
import Ophthal from '../../assets/Ophthal.jpg'
import Sexologist from '../../assets/Sexologist.jpg'
import Urology from '../../assets/Urology.jpg'
import classes from './Home.module.css'
import history from '../history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Meals = () => {
  return (
    <Fragment>
      <Router>
   <h1 style={{ paddingLeft:"50px"}}>Specialists</h1>
   <h2 style={{color: "grey", paddingLeft:"50px"}}>Consult with top Doctors</h2>
   <div className={classes.Specialty}>
    
    <Link to='/Specialty'>
   <img className={classes.Dermat} src={Dermat} alt='dermat' />
   </Link>
        <img className={classes.Physician} src={Physician} alt='dermat' />
        <img className={classes.ENT} src={ENT} alt='ENT' />
        <img className={classes.Ortho} src={Ortho} alt='ENT' />
        <img className={classes.Paediatric} src={Paediatric} alt='Paediatric' />
  
      </div>
      <div className={classes.Specialty1}>
        <img className={classes.Ophthal} src={Ophthal} alt='dermat' />
        <img className={classes.Urology} src={Urology} alt='dermat' />
        <img className={classes.Ophthal} src={Ophthal} alt='ENT' />
        <img className={classes.Sexologist} src={Sexologist} alt='ENT' />
        <img className={classes.Urology} src={Urology} alt='Paediatric' />
  
      </div>
      </Router>
    </Fragment>
  );
};

export default Meals;
