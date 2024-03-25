import React, { useContext, useEffect, useState } from "react";
import { UPDATE_USER, USER } from "../.././../Api/Api";
import Loading_page from "../../../components/website/Loading";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Minu } from "../../../context/Minu_context";
import { Axios } from "../../../Api/Axios";
export default function Updatd_user() {
  // get name and email
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Sive_btn, setSive_btn] = useState(false);
  //minu
  const minu = useContext(Minu);
  const IsOpen = minu.IsOpen;
  const id = window.location.pathname.split("/").slice(-1)[0];
  //location
  const location = useNavigate();

  //Loading
  const [Loading, setLoading] = useState(false);

  //oncange

  useEffect(() => {
    Axios.get(`${USER}/${id}`)
      .then((se) => {
        setEmail(se.data.email);
        setName(se.data.name);
        setRole(se.data.role);
        setSive_btn(true);
      })
      .catch((err) => console.log(err));
  }, []);

  //submit function
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Axios.post(`${UPDATE_USER}/${id}`, {
        name: Name,
        email: Email,
        role: Role,
      });
      setLoading(false);
      location("/dashboard/users", { replace: true });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <>
      {Loading && <Loading_page />}
      <Form
        onSubmit={submit}
        style={{
          marginLeft: IsOpen ? "10%" : "15%",
          marginTop: "2%",
          width: "65%",
        }}
        className="form-contanar "
      >
        <div className="costom-form">
          <h1>Updatd user id:{id}</h1>
          <br />
          <Form.Group
            className="form-div"
            controlId="exampleForm.ControlInput1">
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={Name}
              name="name"
              type="text"
              className=""
              placeholder="Name"
              required
            />
            <Form.Label>Name</Form.Label>
          </Form.Group>
          <Form.Group
            className="form-div"
            controlId="exampleForm.ControlInput2">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              name="Email"
              type="Email"
              className=""
              placeholder="Email"
              required
            />
            <Form.Label>Email</Form.Label>
          </Form.Group>

          <Form.Group
            className="form-div"
            controlId="exampleForm.ControlInput3">
            <Form.Select
              onChange={(e) => setRole(e.target.value)}
              value={Role}
              name="name"
              className="w-75"
              >
              <option disabled value="">Select Role</option>
              <option value="1995">Admin</option>
              <option value="2001">Usar</option>
              <option value="1996">Writer</option>
            </Form.Select>
            <Form.Label>Role</Form.Label>
          </Form.Group>
          {Sive_btn && (
            <button type="submit" className="btn btn-outline-success ">
              Save
            </button>
          )}
        </div>
      </Form>
    </>
  );
}
