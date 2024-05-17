import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import { Minu } from "../../../context/Minu_context";
import { WindowSize } from "../../../context/WindowContext";


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Links } from "../navlink/Navlink";
import { Usar } from "../../../context/usar";
export default function Sidebar() {







  const minu = useContext(Minu);
  const IsOpen = minu.IsOpen;

  
  const usar =useContext(Usar)
  const usar_data = usar.usar_data


  const WindowSizes = useContext(WindowSize);
  const Size = WindowSizes.Size;
  console.log(Size);


  return (
    <>
    <div    style={{
      position:"fixed",
      top:"70px",
      left:"0",
      width:"100%",
      height:"100vh",      
      backgroundColor:"rgba(154,160, 167,0.3)",
      display:Size<"780"?IsOpen?"none":"block":"none",
    }}></div>
    <div
      className="side-bar pt-2"
      style={{
        width: IsOpen ? "220px" : "fit-content",
        left: Size < "780" ? (IsOpen ? "-100%":"0" ) : "0",
        position: Size < "780" ? "fixed" :"sticky" ,
      }}
    >
       





    
       {Links.map((link,index)=>(
 link.role.includes(usar_data.role) &&(
<div key={index}>

{Size>"780"&&IsOpen?

<NavLink
style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
to={link.path}
className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>
<FontAwesomeIcon icon={link.icon} className="side-bar-text-icone  me-1" />

<p
  style={{ display: IsOpen ? "block" : "none" }}
  className="side-bar-text"
>
{link.name}
</p>

</NavLink>

:

<OverlayTrigger
placement="right"
overlay={<Tooltip id="button-tooltip">{link.overlay}</Tooltip>}
>

<NavLink
  style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
  to={link.path}
  className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>

  <FontAwesomeIcon icon={link.icon} className="side-bar-text-icone  me-1" />

  <p
    style={{ display: IsOpen ? "block" : "none" }}
    className="side-bar-text"
  >
    {link.name}
  </p>

</NavLink>

</OverlayTrigger>

}

</div> 
)))}
       








    </div>
    </>
  );
}
