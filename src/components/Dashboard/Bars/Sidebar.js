import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Minu } from "../../../context/Minu_context";
import { WindowSize } from "../../../context/WindowContext";

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Axios } from "../../../Api/Axios";
import { USER } from "../../../Api/Api";
export default function Sidebar() {



  const [user,setuser]=useState("")

useEffect(()=>{
    
Axios.get(`/${USER}`)   
      .then((data)=>setuser(data.data))

},[])



  const minu = useContext(Minu);
  const IsOpen = minu.IsOpen;

  const WindowSizes = useContext(WindowSize);
  const Size = WindowSizes.Size;
  console.log(Size);
  
  const users = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Users
    </Tooltip>
  );
  const add_user = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add user
    </Tooltip>
  );
  const Writer = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Writer
    </Tooltip>
  );

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
       


       {user.role==="1995"?<>
       
{/* Users */}
{Size>"780"&&IsOpen?
<NavLink
style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
to={"Users"}
className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>
<FontAwesomeIcon icon={faUsers} className="side-bar-text-icone  me-1" />
<p
  style={{ display: IsOpen ? "block" : "none" }}
  className="side-bar-text"
>
Users
</p>
</NavLink>
:
      <OverlayTrigger
        placement="right"

        overlay={users}
      >
        <NavLink
          style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
          to={"Users"}
          className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
        >
          <FontAwesomeIcon icon={faUsers} className="side-bar-text-icone  me-1" />
          <p
            style={{ display: IsOpen ? "block" : "none" }}
            className="side-bar-text"
          >
            Users
          </p>
        </NavLink>
      </OverlayTrigger>
}



{/* Add_users */}

      {Size>"780"&&IsOpen?
<NavLink
style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
to={"user/Add"}
className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>
<FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
<p
  style={{ display: IsOpen ? "block" : "none" }}
  className="side-bar-text"
>
Add User
</p>
</NavLink>
:
      <OverlayTrigger
        placement="right"

        overlay={add_user}
      >
        <NavLink
          style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
          to={"user/Add"}
          className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
        >
          <FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
          <p
            style={{ display: IsOpen ? "block" : "none" }}
            className="side-bar-text"
          >
            Add User
          </p>
        </NavLink>
      </OverlayTrigger>
}

{/* Writer */}

{Size>"780"&&IsOpen?
<NavLink
style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
to={"Writer"}
className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>
<FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
<p
  style={{ display: IsOpen ? "block" : "none" }}
  className="side-bar-text"
>
Writer
</p>
</NavLink>
:
      <OverlayTrigger
        placement="right"

        overlay={Writer}
      >
        <NavLink
          style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
          to={"Writer"}
          className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
        >
          <FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
          <p
            style={{ display: IsOpen ? "block" : "none" }}
            className="side-bar-text"
          >
            Writer
          </p>
        </NavLink>
      </OverlayTrigger>
}


       </>:user.role==="1996"?<>
      
{/* Writer */}

      {Size>"780"&&IsOpen?
<NavLink
style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
to={"Writer"}
className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
>
<FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
<p
  style={{ display: IsOpen ? "block" : "none" }}
  className="side-bar-text"
>
Writer
</p>
</NavLink>
:
      <OverlayTrigger
        placement="right"

        overlay={Writer}
      >
        <NavLink
          style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
          to={"Writer"}
          className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
        >
          <FontAwesomeIcon icon={faUserPlus} className="side-bar-text-icone  me-1" />
          <p
            style={{ display: IsOpen ? "block" : "none" }}
            className="side-bar-text"
          >
            Writer
          </p>
        </NavLink>
      </OverlayTrigger>
}

       </>:<></>}





    </div>
    </>
  );
}
