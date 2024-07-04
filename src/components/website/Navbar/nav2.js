import React, { useContext, useEffect, useState } from 'react'
import { Container, Dropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cookie from 'cookie-universal'
import { Axios } from '../../../Api/Axios'
import { CATEGORIES, LOGOUT } from '../../../Api/Api'
import String_slice from '../../../helpers/String_slice'
import Skeleton from 'react-loading-skeleton'
import Show_skeleton from '../Skeleton'
import { Usar } from '../../../context/usar'
export default function Nav2() {
  const usar =useContext(Usar)
  const usar_data = usar.usar_data
async function logout(){
    try{
const res= await Axios.get(`/${LOGOUT}`)
      console.log(res)
      cookies.remove("Bearer")
      window.location.pathname="/"
}
catch(err){
console.log(err)
}}
//category
const [category,setcategory]=useState([])  
// Skeleton loading
const [loading, setLoading] = useState(true);
// get ail Categories 
useEffect(()=>{Axios.get(`/${CATEGORIES}`).then((se)=>setcategory(se.data.slice(-8))).finally(()=>setLoading(false))},[])
// show ail Categories 
const show_category=category.map((item,key)=>(
<p key={key} className='m-0 category-title '>{String_slice(item.title,15)}</p>  
))
//cookies
const cookies=cookie()
const token= cookies.get("Bearer")

  return (
<nav className=' py-3 nav2'>
<Container>
 <div className=' d-flex  align-items-center justify-content-between  flex-wrap'>
        <Link className=' col-3' to="/" >
 <img width="130px" src={require("../../../imgs/logo_banana.png")} alt='togo'></img>
        </Link>
    
    <div className=' col-12 col-md-6  order-md-2  order-3  mt-md-0  mt-3   position-relative '>
        <Form.Control 
        type="srarch" 
        className='form-control  custom-search  py-3  rounded-pill'
        placeholder='srarch product'
        />
        <h3 className='  btn btn-primary position-absolute  top-0 end-0 h-100   line-height m-0 px-4  rounded-pill d-flex  align-items-center justify-content-center abs'>
        srarch
        </h3>
    </div>
    <div className=' col-3  d-flex  align-items-center justify-content-end  gap-4 order-md-3  order-1'>
        <Link to="/cart">
            <img className='profile-image'
            width="40x" 
            src={require("../../../imgs/cart.png")}
            alt='cart'
            />
        </Link>
        {token?<></>:   
         <Link to="/login">
         <img className='profile-image'
          width="40x" 
         src={require("../../../imgs/login (2).png")}
         alt='login'
         />
     </Link>} 
        
{/* 
    <Dropdown>
      <Dropdown.Toggle variant="white"className='rounded-pill p-0  border-0' >
        <img className='profile-image'
          width="40px"
          src={require( "../../../imgs/user.png")}
          alt='profile'/>
      <style type="text/css">{`.dropdown-toggle::after {display: none !important;}.dropdown-toggle:focus {outline: none;box-shadow: none;}`}</style>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Profile <img width="28px" src={require("../../../imgs/profile.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Item href="#/action-2">Favorite <img width="28px" src={require("../../../imgs/Favorite.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Item href="/cart">Cart <img width="28px" src={require("../../../imgs/shopping-cart_3737372.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Item onClick={logout}>Logaute <img width="28px" src={require("../../../imgs/logout.png")}alt='cart'/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    <Dropdown align="end">
      <Dropdown.Toggle variant="white"  className="rounded-pill p-0  border-0">
        <img
          className='profile-image'
          width="40px"
          src={require( "../../../imgs/user.png")}
          alt='profile'
        />
         <style type="text/css">{`.dropdown-toggle::after {display: none !important;}.dropdown-toggle:focus {outline: none;box-shadow: none;}`}</style>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="px-3 py-2">
          <div className="text-muted small">{usar_data.name}</div>
          <div className="fw-bold">{usar_data.email}</div>
        </div>
        <Dropdown.Divider />
        <Dropdown.Item href="/profile">Profile <img width="25px" src={require("../../../imgs/profile.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Item href="/favorite">Favorite <img width="25px" src={require("../../../imgs/Favorite.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Item href="/cart">Cart <img width="25px" src={require("../../../imgs/shopping-cart_3737372.png")}alt='cart'/></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={logout}>Logaute <img width="25px" src={require("../../../imgs/logout.png")}alt='cart'/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
  </div>
  <div className=' mt-3'>
    <div className=' d-flex  align-items-center justify-content-start flex-wrap gap-3 '>
    {loading?<Show_skeleton height="20px" caunt="8" width="100%" col='col-1'/>:show_category}  
       <Link className='text-dark text-decoration-none ' to="/category" >
       <span className='category-title'>show ail</span>
       </Link>
      </div>
   </div>
 </Container>
</nav>
  )
}