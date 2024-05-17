import React, { useEffect, useRef, useState } from "react";
import { CATEGORY} from "../../../Api/Api";
import Loading_page from "../../../components/website/Loading";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../../Api/Axios";
export default function Addcategories() {
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
  const [img, setimg] = useState("");
  const [title, settitle] = useState("");

  //Error
  const [Error, setError] = useState("");
  //states
//   const [form2, setform2] = useState({
//     title: "",
//     img: "",
//   });
  //oncange
//   function onChange(e) {
//     setform2({ ...form2, [e.target.name]: e.target.value });
//   }

  //submit function
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    const form=new FormData()
     form.append("title",title)
     form.append("image",img)
    try {
      await Axios.post(`/${CATEGORY}/add`,form);
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
      <div className="contenar" style={{ marginTop: "-20px" ,width:"93%"}}>
        <div className=" centar vh-100">
          <Form onSubmit={submit} className="form-contanar">
            <div className="costom-form">
              <h1>Add Categories</h1>
              <br />
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                ref={focus}
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
                <img className="imgcard-Categories-add-page"alt=""src={URL.createObjectURL(img)} style={{
                  backgroundImage: `url(${URL.createObjectURL(img)})`,
                  width: "80%",
                  height: "225px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                  marginTop:"-15px",
                  marginBottom:"10px"
                }}></img>)}



              <button
                type="submit"
                className={`btn btn-outline-success ${
                  title.length < 1 ||
                  img.length < 1 
                    ? "disabled"
                    : ""
                }`}
              >
                Add Categories
              </button>
              {Error !== "" && <span className="Error-message">{Error}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}


/* img pro صور المنتج */
/* تنسيق عام للعنصر */
// .imgcard{
//     width:100%;
//     height:auto;
//     background-repeat:no-repeat;
//     background-size:cover;
//     border-radius:8px;
//     margin: 0;
//     padding: 0;
   
//   }
  
  
  
  /* تنسيق خاص بالهواتف المحمولة */
//   @media (max-width: 767px) {
//     .imgcard{
//       width:100%;
//       height:auto;
//       background-repeat:no-repeat;
//       background-size:cover;
//       border-radius:8px;
//     }
//   }
  
  
  /* تنسيق خاص بالأجهزة اللوحية مثل الأيباد */
//   @media (min-width: 768px) and (max-width: 1024px) {
//     .imgcard {
//        width:100%;
//     height:auto;
//       background-repeat:no-repeat;
//       background-size:cover;
//       border-radius:8px;
//     }
//   }