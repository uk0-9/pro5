import React, { useState } from 'react';
import axios from 'axios';
import {  BASEURL, LOGIN} from '../../../Api/Api';
import { Link } from 'react-router-dom';
export default function Login () {
     //loading
     const [loading,setloading]=useState(false)
     
     //error
     const [error,seterror]=useState("")
     //states
    const [form,setform]=useState({
    name:"",
    email:"",
    password:"",
    Confirm_Password:""
    });
    //oncange
    function onChange(e){
      
      setform({...form,[e.target.name]:e.target.value})
    };
    //submit function
    async function submit(e){
      e.preventDefault();
      try{
    await axios.post(`${BASEURL}/${LOGIN}`,form)
    setloading(false)
window.location.pathname=("/")
      }
      catch(err){
        setloading(false)
        console.log(err);
        if (err.response && err.response.status === 401) {
          seterror("This email or password is false");
        } else {
          seterror("An internal server error occurred. Please try again later.");
        }
    }
    }
    const [showPassword, ShowPasswordset] = useState(false);
function show_Password() {ShowPasswordset((op) => !op);}
  return (
     <div className={`container`} id="container">
       <div className="form-container sign-in-container">
         <form action="#" className='form'onSubmit={submit} >
           <h1 className="title">Login</h1>
           <div className="social-container">
             <a href="#ات" className="social"><i className="fab fa-facebook-f"></i></a>
             <a href="#تت" className="social"><i className="fab fa-google-plus-g"></i></a>
             <a href="#ا" className="social"><i className="fab fa-linkedin-in"></i></a>
           </div>
           <span className="subtitle">or use your account</span>
           <input name='email'value={form.email}onChange={onChange} type="email" placeholder="Email" className="input-field" />
               <input name='password'value={form.password}onChange={onChange}  type={showPassword ? 'text' : 'password'} placeholder="Password" className="input-field" />
               <span onClick={show_Password} className={`${showPassword ? "fa-regular fa-eye " : "fa-regular fa-eye-slash "} input-show-pasword`}></span>
           <button className="button" type="submit">Login</button>
           {error!=="" && <span className="error-message w-100" >{error}</span> }
           <a href="#ا" className="forgot-password">Forgot your password?</a>
           <p ><span>Already have an account?</span><Link to="/signup" className="forgot-password"> Sign in here</Link></p>	
         </form>
       </div>
       <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="title">Welcome Back!</h1>
            <p className="description">To keep connected with us please login with your personal info</p>
            <Link to="/signup" className="text-light text-decoration-none" ><button className="button ghost">Sign Up</button></Link>
          </div>
        </div>
      </div>
     </div>
  );
};

