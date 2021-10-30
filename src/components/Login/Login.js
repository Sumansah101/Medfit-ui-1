import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap'
import {Login as loginService,SignUp as signUpService} from "../../services/auth.service";
import medicon_login from '../../assets/medicon_login.png'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login as loginAction} from "../../store/auth.slice"
import {auth , provider,firebase}  from '../../services/firebase';
import  '../Layout/Header.css';
function LoginForm({toggleLogin,handleLoginModalShowHide,handleSignupModalShowHide}) {
    const history=useHistory()
    const dispatch = useDispatch();
    const handleModal=()=>{
        handleLoginModalShowHide()
    }

    const handleGoogle =()=>{
        auth.signInWithPopup(provider).then((result)=>{
            var credential = result.credential;
           var token = credential.accessToken;
            var user = result.user;
            firebase.auth().currentUser.getIdToken(true).then(function(token) {
                const id=user.uid
                 user=mapUser(user)
                //{token:idToken,id:id}
                let newUser={user:{...newUser,token}}
                sessionStorage.setItem('user',JSON.stringify({currentUser:newUser , isAuthenticated:true}))
                dispatch(loginAction(newUser))
                handleModal()
              }).catch(function(error) {
                // Handle error
                console.log(error)
              });
        })
        .catch((err)=>{
            console.log(err)
        });
       
    }
    const mapUser=(user)=> {
        const customClaims = (user.customClaims || { role: '' }) 
        const role = customClaims.role ? customClaims.role : 'user'
        return {
            id: user.uid,
            email: user.email || '',
            name: user.name || '',
            role:user.role||'user',
        }
    }

    const handleSubmit=()=>{
        
        dispatch(loginService(state))
        .then((resp)=>{
            sessionStorage.setItem('user',JSON.stringify({currentUser:resp.user,isAuthenticated:true}))
            dispatch(loginAction(resp.user))
            handleModal()
            setState({
                email : "",
                password : ""
            })
        }).catch((error)=>{
            console.log(error)
        })
      
      
    }

    const [state , setState] = useState({
        email : "",
        password : ""
    })
  


 



    const handleChange = (e) => {

        const {name , value} = e.target  
        console.log(name,value) 
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
  
   

  return(
         <>
            <>
             <Modal show={toggleLogin}>
                  
                 <Modal.Body>
                    <span className="float-right" style={{cursor:'pointer'}} onClick={ handleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path fill="#aeaeae" fillRule="evenodd" d="M10.047.335L6 4.386 1.953.335a1.145 1.145 0 0 0-1.618 0 1.14 1.14 0 0 0 0 1.613L4.382 6 .335 10.052a1.14 1.14 0 0 0 0 1.613 1.145 1.145 0 0 0 1.618 0L6 7.614l4.047 4.051c.446.447 1.17.447 1.618 0a1.14 1.14 0 0 0 0-1.613L7.618 6l4.047-4.052a1.14 1.14 0 0 0 0-1.613 1.145 1.145 0 0 0-1.618 0z"/>
                    </svg>
                    </span>
                    <div className="login_conatiner">
                    <img  src={medicon_login} width="127" height="112" className="loginicon" alt=""/>
                    <h3 className="loginicon">MEDFIT</h3>
                    <div>
                      <div className="InputContainer">
                      <input name="email" type="text" placeholder="Enter your mail" className="emailInput"
                          value={state.email}
                          onChange={handleChange}
                      />
                      </div>
                      <div className="InputContainer">   
                      <input name="password" type="password" placeholder="Enter your Password" className="emailInput"
                          value={state.password}
                          onChange={handleChange}
                      />
                       
                      </div>
                    
                      <div className="ActionContainer">
                        <button className="ContinueButton"  onClick={handleSubmit}> Continue</button>
                      </div>

                      <div className="Tnc">
                        <div className="TncText">
                          By Continuing you agree to the 
                          <a href="" target="_blank" rel="noreferrer" className="TncAnchor">
                            Terms of Services</a> and 
                            <a href="" target="_blank" rel="noreferrer" className="TncAnchor">Privacy policy</a>.
                            </div>
                            
                       </div>

                       <div className="ActionContainerOtherMethods">
                           <div className="ContinueButtonWhite">Continue with  
                              <div className="SocialMediaEmailsContainer ">
                                  <img src="https://static.cure.fit/assets/images/google-logo.svg" className="SocialMediaIcon " onClick={handleGoogle}/>
                              </div>
                           </div>
                        </div>
                      <br/>
                      <div className="ActionContainerOtherMethods" onClick={()=>{handleSignupModalShowHide();handleLoginModalShowHide(); }}>
                           <div className="ContinueButtonBlue">Sign Up
                              <div className="SocialMediaEmailsContainer ">
                              <img src="https://static.cure.fit/assets/images/email.png" className="SocialMediaIcon "  />
                            
                              </div>
                           </div>
                        </div>
                    </div>

                   
                   </div>
                   
             </Modal.Body>
        </Modal>
            </>

         </>
     
    )
}

export default LoginForm