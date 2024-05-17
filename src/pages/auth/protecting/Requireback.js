import React from 'react'
import cookie from 'cookie-universal';
import { Outlet } from 'react-router-dom';
export default function Requireback() {
   
    const cookies=cookie()
    const get_token= cookies.get("Bearer")
    return (
        get_token?window.history.back():<Outlet/>
      )
}
