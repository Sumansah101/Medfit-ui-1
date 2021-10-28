import React, {useState} from 'react';
import {SignUp} from '../../services/auth.service'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function RegistrationForm() {

    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        name:"",
        role:""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const dispatch = useDispatch();
    const history=useHistory()

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            console.log(state.password , state.confirmPassword)
        }
    }

    const sendDetailsToServer = () => {
        console.log(state.email , state.password)
        if(state.email.length && state.password.length) {
         
            const payload={
                "email":state.email,
                "password":state.password,
                "name":state.name,
                "role": state.role
            }
            dispatch(SignUp({
                payload
            })).then(()=>{
                history.push("/")
            })  
            console.log(payload)
        } else {
            console.log("esle1") 
        }
        
    }
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
            <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter name"
                       value={state.email}
                       onChange={handleChange}
                />
            
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Role</label>
                <input type="text" 
                       className="form-control" 
                       id="role" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter role"
                       value={state.role}
                       onChange={handleChange}
                />

                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm