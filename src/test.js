
import { useState } from 'react';
import './App.css';

function Test() {
  // const [email,setemail]=useState("")
  // const [name,setname]=useState("")
  // console.log(name)
  // const [password,setpassword]=useState("")
  // const [password2,setpassword2]=useState("")
  const [form,setform]=useState({
name:"",
email:"",
password:"",
password2:"",

  })
  console.log(form)
  function onChanget(e){
setform({...form,[e.target.name]: e.target.value })
  }
  return (
<div className="App">

<div>
  <h1 className="text-center text-black-50">Log In </h1>
  <div className="row ">
    <div className="col-xl-6 col-lg-6 col-md-7 col-sm-6  col-7 container card card-footer mt-5">
      <form className="m-3" >
        <div className="form-group ">
          <label className>name</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>  
            </div>
            <input placeholder="name" className="form-control" type="text"value={form.name}onChange={onChanget}name='name'  />
          </div>

          <label className>email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>  
            </div>
            <input placeholder="email" className="form-control" type="email"value={form.email}onChange={onChanget} name='email'  />
          </div>

          <label>password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">P</span>  
            </div>
            <input placeholder="password" className="form-control " type="password" value={form.password}onChange={onChanget} name='password' />
          </div>

          <label>password2</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">P</span>  
            </div>
            <input placeholder="password" className="form-control " type="password" value={form.password2}onChange={onChanget} name='password2' />
          </div>
          <small className="form-text text-muted">Set a strong password</small>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" >I agree to the terms</label>  
        </div>
        <button className="btn btn-outline-secondary mt-2">Log In </button>
      </form>
    </div>
  </div>
</div>


</div>

  );
}

export default Test;
