import React, { useEffect, useState } from 'react'
import cookie from 'cookie-universal';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASEURL, USER } from '../../Api/Api';
import Loading from '../../components/website/Loading';
import { Axios } from '../../Api/Axios';
export default function RequireAuth() {
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
   console.log(get_token)
  return (
    get_token?user===""?<Loading/>:<Outlet/>:<Navigate to={"/login"} replace={true}/>
  )
}
