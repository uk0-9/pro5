import React from 'react'
import Topbar from '../../components/Dashboard/Bars/Topbar'
import Sidebar from '../../components/Dashboard/Bars/Sidebar'
import { Outlet } from 'react-router-dom'


export default function Dashboard() {
  return (
    <div className='  position-relative dashboard  '>
    <Topbar/>
    <div className='d-flex  gap-1' style={{marginTop:"70px"}}>
      <Sidebar/>
      <Outlet/>
    </div>
    </div>
  )
}
