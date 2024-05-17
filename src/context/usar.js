import React, { createContext, useContext, useEffect, useState } from 'react'
import { Axios } from '../Api/Axios'
import { USER } from '../Api/Api'
import cookie from 'cookie-universal';

const cookies=cookie()
const get_token= cookies.get("Bearer")

export const Usar=createContext("")
export default function Usar_context({children}) {
    const [usar_data,setusar_data]=useState("")
    const [usar_data_token,setusar_data_token]=useState(get_token)

    useEffect(()=>{
     if(get_token){
    Axios.get(`/${USER}`)   
  .then((data)=>setusar_data(data.data))
}   
    },[])
  return (
    <Usar.Provider value={{usar_data,setusar_data}}>{children}</Usar.Provider>
  )
}
