import React, { useEffect, useState } from "react";
import { CATEGORIES, CATEGORY, UPDATE_CATEGORY} from "../../../Api/Api";
import Loading_page from "../../../components/website/Loading";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../Api/Axios";
export default function Updatd_Categories() {
  //location
  const location = useNavigate();
  
  //Loading
  const [Loading, setLoading] = useState(false);
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");
  const [Sive_btn, setSive_btn] = useState(false);
  //Error
  const [Error, setError] = useState("");
//id
  const {id} =useParams()

  // get Categories data
  useEffect(() => {
    // setLoading(true)
    Axios.get(`${CATEGORY}/${id}`)
      .then((se) => {
        
        settitle(se.data.title);
        setSive_btn(true);
      })
  .catch(() =>Navigate("/dashboard/categories/page/404",{replace:true}));
  }, []);
  



  //submit function
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
        const form=new FormData()
     form.append("title",title)
     form.append("image",img)
      await Axios.post(`/${UPDATE_CATEGORY}/${id}`,form);
      setLoading(false);
      location("/dashboard/categories");
    }
    catch (err) {
      setLoading(false);
      console.log(err);
      if (err.response && err.response.status === 422) {
        setError("This email is already taken");
      } else {
        setError("An internal server Error occurred. Please try again later.");
      }
    }
  }


  return (
    <>
      {Loading && <Loading_page />}
      <div className="contenar w-100" style={{ marginTop: "-20px" }}>
        <div className=" centar vh-100">
          <Form onSubmit={submit} className="form-contanar">
            <div className="costom-form">
              <h1>Updatd Categories</h1>
              <br />
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  onChange={(e)=>settitle(e.target.value)}
                  value={title}
                  name="title"
                  type="text"
                  className=""
                  placeholder="title"
                  minLength="1"
                  required
                />
                <Form.Label>Title</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  onChange={(e)=>setimg(e.target.files.item(0))}
                  type="file"
                />
                <Form.Label>Img</Form.Label>
              </Form.Group>

              {img && (
                <img className="imgcard3"alt=""src={URL.createObjectURL(img)} style={{
                  backgroundImage: `url(${URL.createObjectURL(img)})`,
                  width: "80%",
                  height: "225px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                  marginTop:"-15px",
                  marginBottom:"10px"
                }}></img>)}


{Sive_btn&&(

              <button
                type="submit"
                className={`btn btn-outline-success ${
                  title.length < 1 
                    ? "disabled"
                    : ""
                }`}
              >
                Updatd Categories
              </button>)}
              {Error !== "" && <span className="Error-message">{Error}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}


