import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import {  Minu } from '../../../context/Minu_context'
import { Link } from 'react-router-dom'

export default function Topbar() {
  const minu=useContext(Minu)
  const setIsOpen=minu.setIsOpen
  return (
    <div className='top-bar d-flex  align-items-center  justify-content-between'>
      <div className='  d-flex  align-items-center gap-5   '>
         <h3>banana</h3>
         <FontAwesomeIcon  icon={faBars} cursor={"pointer"} style={{marginLeft:"63px",fontSize:"23px"}} onClick={()=>setIsOpen((se)=>!se)} />
 <Link to="/"><button className=' btn btn-outline-info' >to webside</button></Link>
      </div>
       </div>
  )
}
