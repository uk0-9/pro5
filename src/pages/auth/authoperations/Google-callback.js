import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASEURL, GOOGLE_CALL_BACK } from '../../../Api/Api'
import { useLocation } from 'react-router-dom'
import cookie from "cookie-universal";
import Loading_page from '../../../components/website/Loading';
export default function Google_callback() {
  //loading
  const [Loading,setLoading]=useState(false)
  //cookies
  const cookies=cookie()
  //url or location
  const location=useLocation();
  useEffect(()=>{
async function Google_call(){
  setLoading(true)
  try{
   const res= await axios.get(`${BASEURL}/${GOOGLE_CALL_BACK}${location.search}`)
   setLoading(false)
     window.location.pathname=("/")
    const token=res.data.access_token
    cookies.set("Bearer",token,{path:"/"})
  }
  
  catch(err){
    console.log(err)
    setLoading(false)

  }
}
Google_call()
  },[])
  return (
    <div>{Loading&&<Loading_page/>}</div>
  )
}
