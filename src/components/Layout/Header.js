import { Fragment } from 'react';
import medIcon from '../../assets/medicon.jpg'
import classes from './Header.module.css';
import login from '../../assets/login.jpg'
const Header = (props) => {
  
  return (
  <div>
     
      <header className={classes.header}>
      <img src={medIcon} alt='MedIcon' />
        <h1 style={{color: "black"}}>MEDFIT</h1>
        <p className={classes.consult}>Online Consult</p>
        <img className={classes.login} src={login} alt='login' />  
    
      </header>
     
      </div>
  );
};

export default Header;
