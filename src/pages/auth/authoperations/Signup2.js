import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import {  BASEURL, LOGIN, SIGNUP} from '../../../Api/Api';
import Loading_page from '../../../components/website/Loading';
import cookie from 'cookie-universal'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
export default function Signup2() { 
   //ref
 const focus=useRef("")
 //Handil ref
 useEffect(()=>{
   focus.current.focus()
 },[])

//location
     const location=useNavigate()
//cookies
const cookies=cookie()

     //Loading
     const [Loading,setLoading]=useState(false)
     
     //Error
     const [Error,setError]=useState("")
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
      setLoading(true)
      try{
  const res= await axios.post(`${BASEURL}/${SIGNUP}`,form)
    setLoading(false)
location("/",{replace:true})
const token=res.data.token
cookies.set("Bearer",token)
window.location.reload()
      }
      catch (err) {
        setLoading(false)
        console.log(err);
        if (err.response && err.response.status === 422) {
          setError("This email is already taken");
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
    <h1>Signup naw</h1><br/>
        <Form.Group className="form-div" controlId="exampleForm.ControlInput1">
        <Form.Control onChange={onChange} value={form.name} name='name'  type="text" className=""  placeholder="Your name" minLength="3" required ref={focus}  />
        <Form.Label>name</Form.Label>
      </Form.Group>
        <Form.Group className="form-div" controlId="exampleForm.ControlInput2">
        <Form.Control onChange={onChange} value={form.email} name='email'  type="email" className="" placeholder="Your Email" required  />
        <Form.Label>Email</Form.Label>
      </Form.Group>
            <Form.Group className="form-div" controlId="exampleForm.ControlInput3">
        <Form.Control onChange={onChange}  value={form.password} name='password' type={showPassword ? 'text' : 'password'} className="" placeholder="Password"minLength="8" required/>
        <Form.Label >password</Form.Label>
      </Form.Group>
          <button type="submit" className=" btn    btn-outline-success " >Signup</button>
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