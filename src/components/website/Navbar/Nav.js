

import { Link,NavLink } from 'react-router-dom';
import cookie from 'cookie-universal'
import { LOGOUT } from '../../../Api/Api';
import { Axios } from '../../../Api/Axios';



export default function Nav(pro) {
   let mode=1


let token_is_here_or_no=(false)
   const cookies=cookie()  
if(cookies.get("Bearer")){
  token_is_here_or_no = true;
}



async function logout(){
  try{
const res= await Axios.get(`/${LOGOUT}`)
console.log(res)
cookies.remove("Bearer")
window.location.pathname="/"
}

catch(err){
console.log(err)
}
}

return (
<>

<div className='gg box'>
<nav className="navbar navbar-expand-lg bg-secondary navbar-dark " >
<Link to="/" className="navbar-brand  ">banana <i className="fa-brands fa-apple"></i></Link>

  <a href="#b" className="navbar-toggler " data-bs-toggle="collapse"  >
     <span className="navbar-toggler-icon"></span></a>



  <div className="collapse navbar-collapse " id="b">
<ul className="navbar-nav " >
  
<li className="nav-item"><NavLink to="/" className="nav-link ">home <i className="fa-solid fa-house-chimney"></i></NavLink></li>
<li className="nav-item"><NavLink to="/ghdhgd" className="nav-link">Ratings <i className="fa-solid fa-face-smile"></i></NavLink></li>
<li className="nav-item"><NavLink to="/bffb" className="nav-link">About <i className="fa-solid fa-address-card"></i></NavLink></li>
<li className="nav-item"><NavLink to="/fbxxfb" className="nav-link">Discounts <i className="fa-solid fa-tags"></i></NavLink></li>


</ul>

<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  
  <button className="btn btn-outline-dark" type="submit">Search</button>
</form>
</div>


{mode===1&&(


<div className="collapse navbar-collapse " id="b" dir="rtl"  >

<div dir='ltr' className=''>

  { token_is_here_or_no ? 
  <>
 <Link ><button onClick={logout} className=' me-3 btn  btn-secondary'>Log out <i className="fa-solid fa-right-to-bracket"></i></button></Link> 
   <Link to="/dashboard"> <button className='me-3 btn  btn-secondary'>Dashboard <i className="fa-solid fa-gauge"></i></button></Link>
  <Link to="/users"> <button className='me-3 btn  btn-secondary'>usar <i className="fa-solid fa-user"></i></button></Link>
 
 </>
 :  
 <>
  <Link to="/signup"><button className=' me-3 btn  btn-secondary'>signup <i className="fa-solid fa-user-plus"></i></button></Link>
 <Link to="/login"><button className=' me-3 btn  btn-secondary'>long in <i className="fa-solid fa-user-plus"></i></button></Link>
  </> }
  {/* هنا انا اقول له وندو يلي هي الصفحه كلها روح لي اللوكل استورج و هات ايتم يلي هو ايميل و اذا كان ترو يعني موجود اعرض لي تسجيل الخروج و اذا كان فولس او غير موجود اعض لي لوق ان و سينق اب و بس  */}


</div>

</div>
)}

{mode===2&&(

<div className="collapse navbar-collapse " id="b" dir="rtl"  >

<div dir='ltr' className=''>
  <Link to="/"> <button className='me-3 btn  btn-secondary'>Go to web side <i className="fa-solid fa-share-from-square"></i></button></Link>
  <Link to="/dashboard/usars"> <button className='me-3 btn  btn-secondary'>usars <i className="fa-solid fa-user"></i></button></Link>
</div>

</div>

)}

</nav>
</div>

</>)
}