import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASEURL, LOGIN, SIGNUP, USER } from "../../../Api/Api";
import Loading_page from "../../../components/website/Loading";

import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../Api/Axios";
export default function Add_user() {
     //ref
 const focus=useRef("")
 //Handil ref
 useEffect(()=>{
   focus.current.focus()
 },[])

  //location
  const location = useNavigate();

  //Loading
  const [Loading, setLoading] = useState(false);

  //Error
  const [Error, setError] = useState("");
  //states
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    Confirm_Password: "",
    role: "",
  });
  //oncange
  function onChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  //submit function
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`/${USER}/add`, form);
      setLoading(false);
      location("/dashboard/Users");
    } catch (err) {
      setLoading(false);
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
  function show_Password() {
    ShowPasswordset((op) => !op);
  }
  return (
    <>
      {Loading && <Loading_page />}
      <div className="contenar" style={{ marginTop: "-20px",width:"93%" }}>
        <div className=" centar vh-100">
          <Form onSubmit={submit} className="form-contanar">
            <div className="costom-form">
              <h1>Add user</h1>
              <br />
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                ref={focus}
                  onChange={onChange}
                  value={form.name}
                  name="name"
                  type="text"
                  className=""
                  placeholder="Your name"
                  minLength="3"
                  required
                />
                <Form.Label>name</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  onChange={onChange}
                  value={form.email}
                  name="email"
                  type="Email"
                  className=""
                  placeholder="Your Email"
                  required
                />
                <Form.Label>Email</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control
                  onChange={onChange}
                  value={form.password}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className=""
                  placeholder="Password"
                  minLength="8"
                  required
                />
                <Form.Label>password</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Select
                  onChange={onChange}
                  value={form.role}
                  name="role"
                  className="w-75"
                >
                  <option disabled value="">
                    Select Role
                  </option>
                  <option value="1995">Admin</option>
                  <option value="2001">Usar</option>
                  <option value="1996">Writer</option>
                  <option value="1999">Product Manger</option>
                </Form.Select>
                <Form.Label>Role</Form.Label>
              </Form.Group>
              <button
                type="submit"
                className={`btn btn-outline-success ${
                  form.name.length < 1 ||
                  form.email.length < 1 ||
                  form.password.length < 8 ||
                  form.role === ""
                    ? "disabled"
                    : ""
                }`}
              >
                Add user
              </button>
              {Error !== "" && <span className="Error-message">{Error}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
