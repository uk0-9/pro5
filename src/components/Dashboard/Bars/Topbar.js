
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import { Minu } from "../../../context/Minu_context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faList } from '@fortawesome/free-solid-svg-icons';
import { Usar } from '../../../context/usar';
export default function Topbar() {
  const minu=useContext(Minu)
  const setIsOpen=minu.setIsOpen
  // user


const usar =useContext(Usar)
  const usar_data = usar.usar_data

  return (
    <div className='top-bar'>
    
      {['xxxxxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="" >
          
          <Container  fluid>

          
            <div className=' d-flex '> 
            <Navbar.Brand  style={{marginLeft:"-15px"}} href="#">Navbar Offcanvas</Navbar.Brand>
            
            <FontAwesomeIcon  icon={faList}  cursor={"pointer"} style={{fontSize:"23px",marginTop:"10px",}} onClick={()=>setIsOpen((se)=>!se)} />
              </div>
              
              <div className=' d-flex  mt-2'>
              <div className="card-container ">
        <div className="icon-container">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='settings-icon' ><FontAwesomeIcon   icon={faCog} /></Navbar.Toggle>
        </div>
        <span className="username">{usar_data.name}</span>
        <img
          className="imgcard"
          alt=""
          src={require('../../../imgs/wallpaperflare.com_wallpaper (2).png')}
        />
      </div>
      </div>
  



            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">go to webside</Nav.Link>
                  <Nav.Link href="/">Users</Nav.Link>
                  <NavDropdown
                    title={usar_data.name}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">logaut</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">profle</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">sitengs</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>



          </Container>
          
        </Navbar>
      ))}
    </div>
  );
}

