import React, { useEffect, useState } from 'react'
import cookie from 'cookie-universal';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASEURL, USER } from '../../../Api/Api';
import Loading from '../../../components/website/Loading';
import { Axios } from '../../../Api/Axios';
import Err403 from '../../../pages/auth/Errors/Err403';
export default function RequireAuth({allowedRole}) {
// user
    const [user,setuser]=useState("")
    const location=useNavigate()
    useEffect(()=>{
        
    Axios.get(`/${USER}`)   
          .then((data)=>setuser(data.data))
        .catch(()=>location("/login",{relative:true}))

    },[])
//cookie&&token
    const cookies=cookie()
   const get_token= cookies.get("Bearer")
  return (
    get_token?user===""?<Loading/>:allowedRole.includes(user.role)? <Outlet/>:<Err403 role={user.role}/>:<Navigate to={"/login"} replace={true}/>
  )
}




