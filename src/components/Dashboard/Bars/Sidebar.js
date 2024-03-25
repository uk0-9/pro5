import { faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Minu } from "../../../context/Minu_context";
import { WindowSize } from "../../../context/WindowContext";

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Sidebar() {
  const minu = useContext(Minu);
  const IsOpen = minu.IsOpen;

  const WindowSizes = useContext(WindowSize);
  const Size = WindowSizes.Size;
  console.log(Size);
  
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Users
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add user
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
      display:Size<"780"?IsOpen?"none":"block":"none"
    }}></div>
    <div
      className="side-bar pt-2"
      style={{
        width: IsOpen ? "220px" : "fit-content",
        left: Size < "780" ? (IsOpen ? "-100%":"0" ) : "0",
        position: Size < "780" ? "fixed" :"sticky" ,
      }}
    >
         <OverlayTrigger
      placement="right"
      overlay={renderTooltip1}
      style={{}}
      >
      <NavLink
        style={{ padding: IsOpen ? "10px 8px 10px 8px" : "10px 8px" }}
        to={"users"}
        className="text-decoration-none  d-flex align-items-center gap-2 side-bar-link"
      >
        <FontAwesomeIcon icon={faUsers} className="side-bar-text-icone  me-1" />
        <p
          style={{ display: IsOpen ? "block" : "none" }}
          className="side-bar-text"
        >
          usars
        </p>
      </NavLink>
      </OverlayTrigger>
      {Size>"780"&&IsOpen?<>
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
Add26565632686526uuk
</p>
</NavLink>
</>

:

      <>
      <OverlayTrigger
        placement="right"

        overlay={renderTooltip2}
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
            Add26565632686526uuk
          </p>
        </NavLink>
      </OverlayTrigger>
    </>
}
    </div>
    </>
  );
}
