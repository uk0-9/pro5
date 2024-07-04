import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav2 from '../../components/website/Navbar/nav2'

export default function Website() {
  return (<>
    <Nav2/>
  <Outlet/></>
  )
}
