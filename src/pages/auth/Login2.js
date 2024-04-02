import React, { useState } from 'react'
import axios from 'axios';
import {  BASEURL, LOGIN} from '../../Api/Api';
import Loading_page from '../../components/website/Loading';
import cookie from 'cookie-universal'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
export default function Login2() { 
     //location
const location=useNavigate()

//cookies
const cookies=cookie()

     //loading
     const [Loading,setLoading]=useState(false)
     
     //Error
     const [Error,setError]=useState("")

     //states
     const [form,setform]=useState({
      email:"",
      password:"",
      });

    //oncange
    function onChange(e){
      
      setform({...form,[e.target.name]:e.target.value})
    };

    //submit function
    async function submit(e){
      e.preventDefault();
      setLoading(true)
      try{
   const res= await axios.post(`${BASEURL}/${LOGIN}`,form)
    setLoading(false)
    location("/",{replace:true})
const token=res.data.token
console.log(token)
cookies.set("Bearer",token)
window.location.reload()
      }

      catch(err){
        setLoading(false)
        console.log(err);
        if ( err.response.status === 401) {
            setError("The email or Password is false");
          } else {
            setError("An internal server Error occurred. Please try again later.");
          }
    }
      
    }
    //show Password
    const [showPassword, ShowPasswordset] = useState(false);
function show_Password() {ShowPasswordset((op) => !op);}

  return (
    <>
    {Loading&&<Loading_page/>}
    <div className="contenar">
      <div className=" centar vh-100">
        <Form onSubmit={submit} className='form-contanar'>
<div className='costom-form'>
    <h1>Login naw</h1><br/>
            <Form.Group className="form-div" controlId="exampleForm.ControlInput1">
        <Form.Control onChange={onChange} value={form.email} name='email'  type="email" className="" placeholder="Your Email" required  />
        <Form.Label>Email</Form.Label>
      </Form.Group>
            <Form.Group className="form-div" controlId="exampleForm.ControlInput2">
        <Form.Control onChange={onChange} value={form.password} name='password' type={showPassword ? 'text' : 'password'} className="" placeholder="Password"minLength="8" required/>
        <Form.Label>password</Form.Label>
      </Form.Group>
          <button type="submit" className=" btn    btn-outline-success " >Login</button>
          {Error!=="" && <span className="Error-message">{Error}</span> }
          </div>
          <div className="social-container">
          <hr style={{width:"45%"}}/>
				<a href="#" className="social google-btn"><i className="fab google-icon fa-facebook-f"></i></a>
				<a href={`http://127.0.0.1:8000/login-google`} className="social google-btn "><i className="fab google-icon fa-google-plus-g"></i></a>
				<a href="#" className="social google-btn"><i className="fab google-icon fa-linkedin-in"></i></a>
        </div>
        </Form>
      </div>
    </div>
    </>
  )
}