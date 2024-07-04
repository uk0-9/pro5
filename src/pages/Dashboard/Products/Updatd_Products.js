import React, { useEffect, useRef, useState } from "react";
import { CATEGORIES, CATEGORY, PRODUCT, PRODUCTS, UPDATE_PRODUCT} from "../../../Api/Api";
import Loading_page from "../../../components/website/Loading";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../Api/Axios";
export default function Updatd_Products() {
// get a product data
useEffect(()=>{
Axios.get(`/${PRODUCT}/${id}`)
.then((e) =>{
console.log(e)
setform(e.data[0])
setimagesforservar(e.data[0].images)
})
.catch((err)=>console.log(err))
},[])   
// for servar or data base
const [id_forservar,setid_forservar]=useState([])
const [imagesforservar,setimagesforservar]=useState([]) 
//id
  const id_image =useRef([])
// Uploading or UploadProgress nombor
  const Progress=useRef([])
  //categories
  const [show_categories,setshow_categories]=useState([])  
  //Loading
  const [Loading, setLoading] = useState(false);
  // Products images 
  const [images, setimages] = useState([]);
  //Error
  const [Error, setError] = useState("");
  const {id} =useParams()
   //location
   const location = useNavigate();
   //ref
    const focus=useRef("")
    const open_images=useRef("")
  //states
  const [form, setform] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });   
//Handil focus
 useEffect(()=>{
   focus.current.focus()
 },[])
 //Handil oncange
 function onChange(e) {
 setform({...form,[e.target.name]:e.target.value})
  }
  //Handil open input images
function Handil_open_images() {open_images.current.click();}
 // it is for i if for lop wine you post aine img wien post more img is i for lop is reset to index 0 wine the new img not get the Progress or nombar % ail thes in 
  const ii=useRef(-1)
 //Handil send image and id prodict and+image for old image and get Progress or make Progress
 async function Handil_images_oncange(e) {
  setimages((prev)=>[...prev,...e.target.files])
  const images2 = e.target.files
  const form2 = new FormData()
  for (let i = 0; i < images2.length; i++) {
    ii.current++;
    form2.append("image", images2[i])
    form2.append("product_id",id)
    try {
      const res = await Axios.post("/product-img/add", form2,{
        onUploadProgress:(Progressevent)=>{
         const {total, loaded}=Progressevent;
         const percent=Math.floor((loaded*100)/total)
         if(percent % 10 === 0){
         Progress.current[ii.current].style.width=`${percent}%`
         Progress.current[ii.current].setAttribute("percent",`${percent}%`)
        }
         },
      })
      id_image.current[ii.current]=res.data.id
    } catch (err) {
      console.log(err.response.data) 
    }
  }
}


 


  //Handil edit function
  async function Handil_edit(e) {
    e.preventDefault();
    setLoading(true);
    try {
        for (let i = 0; i < id_forservar.length; i++) {
         await Axios.delete(`/product-img/${id_forservar[i]}`) }
      await Axios.post(`/${UPDATE_PRODUCT}/${id}`,form);
      setLoading(false);
      location("/dashboard/Products");
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
  
  


   // get categories name and show categories
   const [page,setpage]=useState(1)
   const [limit,setlimit]=useState(50)
   useEffect(()=>{
     Axios.get(`/${CATEGORIES}?limit=${limit}&page=${page}`)
     .then((se)=>{setshow_categories(se.data.data);}
   )
         },[])
   //show categories
 const showcategories=show_categories.map((item,key)=><option key={key} value={item.id}>{item.title}</option>)
// show ail new images 
 const showimages=images.map((item,key)=>
 <div key={key} className=" border p-2 w-100">
  <div className="d-flex align-items-center justify-content-between">
  <div className="d-flex align-items-center justify-content-start gap-2">
    <img src={URL.createObjectURL(item)} alt="img" width="90px"height="100px"/>
<div>
  <p className=" mb-1">{item.name}</p>
  <p >{(item.size /1024 >1000) ?
 ( item.size / (1024*1024)).toFixed(2) +"MB" :
  (item.size /1024).toFixed(2) +"KB"
}</p>
</div>
 </div>
 <button className="btn btn-danger" type="button" onClick={()=>{delet_image(key,item)}} >delete</button>
 </div>
 <div className="custom-progress mt-3 "> <span ref={(e)=>(Progress.current[key]=e)}  className=" innar-progress" ></span></div>
 </div>
  )
// show old image 
const showimagesforservar=imagesforservar.map((item,key)=>
<div key={key} className=" border p-2 w-100">
 <div className="d-flex align-items-center justify-content-between">
   <img src={item.image} alt="img" width="90px"height="100px"/>old image
<button className="btn btn-danger" type="button" onClick={() => delet_imageforservar(item.id)} >delete</button>
</div>
</div>
 )
  async  function delet_image(key,img){
    const id =id_image.current[key]
    try{
    const res = await Axios.delete(`/product-img/${id}`)
      console.log(res)
      setimages((prev)=>prev.filter((image)=>image.id!==img.id))
      id_image.current = id_image.current.filter((i, index) => index !== key);
      --ii.current
    }
    catch (err) {
      console.log(err);
    }}
function delet_imageforservar(id){
    setimagesforservar((prev) => prev.filter((item) => item.id !== id));
    setid_forservar(prev=>{return[...prev,id]})
    // the try or post is in Handil_edit
  }



       

  return (
    <>
      {Loading && <Loading_page />}
      <div className="contenar" style={{ marginTop: "120px" ,width:"93%",marginBottom:"8rem"}}>
        <div className=" centar vh-100">
          <Form onSubmit={Handil_edit} className="form-contanar" style={{height:"50rem",boxShadow:"none",backgroundImage:"none"}}>
            <div className="costom-form" style={{width:"100%"}}>
              <h1>Add Categories</h1>
              <br />
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Select
                  onChange={onChange}
                  value={form.category}
                  name="category"
                  className="w-75"
                  ref={focus}
                  style={{width:"100%"}}
                >
                  <option disabled  value="">
                    Select categories
                  </option>
                  {showcategories}
                </Form.Select>
                <Form.Label>categories</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  onChange={onChange}
                  value={form.title}
                  name="title"
                  type="text"
                  className=""
                  placeholder="title"
                  minLength="1"
                  required
                  style={{width:"100%"}}
                  
                />
                <Form.Label >Title</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                
                  onChange={onChange}
                  value={form.description}
                  name="description"
                  type="text"
                  className=""
                  placeholder="description"
                  minLength="1"
                  required
                  style={{width:"100%"}}
                  
                />
                <Form.Label>description</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control
                
                  onChange={onChange}
                  value={form.price}
                  name="price"
                  type="text"
                  className=""
                  placeholder="price"
                  minLength="1"
                  required
                  style={{width:"100%"}}
                  
                />
                <Form.Label>price</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Control
                
                  onChange={onChange}
                  value={form.discount}
                  name="discount"
                  type="text"
                  className=""
                  placeholder="discount"
                  minLength="1"
                  required
                  style={{width:"100%"}}
                  
                />
                <Form.Label>discount</Form.Label>
              </Form.Group>
              <Form.Group
                className="form-div"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Control
                
                  onChange={onChange}
                  value={form.About}
                  name="About"
                  type="text"
                  className=""
                  placeholder="About"
                  minLength="1"
                  required
                  style={{width:"100%"}}
                  
                />
                <Form.Label>About</Form.Label>
              </Form.Group>
   
              <Form.Group
 className="form-div"
 controlId="exampleForm.ControlInput2"
 >
 <Form.Control
 ref={open_images}
 hidden
 multiple
  onChange={Handil_images_oncange}
   type="file"
   style={{width:"100%"}}
   
 />
<Form.Label>Img</Form.Label>
</Form.Group>


<div className="d-flex align-items-center justify-content-center gap-2 py-3 rounded mb-2 w-100 flex-column"
style={{border:"2px dashed #0086fe",cursor:"pointer"}} 
onClick={Handil_open_images} >
<img src={require("../../../imgs/pagenate.png")} style={{ filter:"grayscale(0%)"}} alt="upload" width="100px"/>
<p style={{color:"#0086fe"}} className=" fw-bold mb-0">Upload images</p>
</div>



<div className=" d-flex align-items-start   flex-column  gap-2 ">
{showimagesforservar}

</div>
<div className=" d-flex align-items-start   flex-column  gap-2 ">

{showimages}
</div>
              <button
                type="submit"
                className={`btn btn-outline-success ${
                 form.title.length < 1 ||
                  images.length < 1 
                    ? "disabled"
                    : ""
                }`}
                
              >
                
                Add Products
              </button>
              {Error !== "" && <span className="Error-message">{Error}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
