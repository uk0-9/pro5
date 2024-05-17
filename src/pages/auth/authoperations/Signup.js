import React, { useState } from 'react'
import axios from 'axios';
import {  BASEURL, SIGNUP} from '../../../Api/Api';
import { Link } from 'react-router-dom';

export default function Signup(){
  //states
  const [error,seterror]=useState(false)
const [form,setform]=useState({
name:"",
email:"",
password:"",
confirm_Password:""
});
//oncange
function onChange(e){
  
  setform({...form,[e.target.name]:e.target.value})
};
//submit function
async function submit(e){
  e.preventDefault();
  try{
await axios.post(`${BASEURL}/${SIGNUP}`,form)
  }
  catch(err){
    console.log(err)
  seterror(true)
  }
}

const [showPassword, ShowPasswordset] = useState(false);
function show_Password() {ShowPasswordset((op) => !op);}

const [repeat_showPassword, repeat_ShowPasswordset] = useState(false);
function repeat_show_Password() {repeat_ShowPasswordset((op) => !op);}

  return (
    <>
     <div className="container" id="container">
       <div className="form-container sign-up-container">
         <form action="#"className='form' onSubmit={submit} >
           <h1 className="title">Create Account</h1>
           <div className="social-container">
             <a href="#ت" className="social"><i className="fab fa-facebook-f"></i></a>
             <a href="#ت" className="social"><i className="fab fa-google-plus-g"></i></a>
             <a href="#ت" className="social"><i className="fab fa-linkedin-in"></i></a>
           </div>
           <span className="subtitle">or use your email for registration</span>
           <input name='name'value={form.name}onChange={onChange}  type="text" placeholder="Name" className="input-field" />
           <input name='email'value={form.email}onChange={onChange} type="email" placeholder="Email" className="input-field" />
           <input name='password'value={form.password}onChange={onChange} type="password" placeholder="Password" className="input-field" />
           {/* <span onClick={show_Password} className={`${showPassword ? "fa-regular fa-eye " : "fa-regular fa-eye-slash "}input-show-pasword`}></span> */}
           <input name='confirm_Password'value={form.confirm_Password}onChange={onChange} type="password" placeholder="Confirm Password" className="input-field" />
           <button type="submit" className="button">Sign Up</button>
           <p ><span>Already have an account?</span><Link to="/login" className="forgot-password " > Login here</Link></p>
         </form>
       </div>
        <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1 className="title">Hello, Friend!</h1>
            <p className="description">Enter your personal details and start journey with us</p>
            <Link to="/login" className="text-light text-decoration-none" ><button className="button ghost">Login</button></Link>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};


