import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import './NavigationBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
function NavigationBar() {
  const navigate = useNavigate()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
              <Container>
                <Navbar.Brand><img src="./images/Channel_logo.png" alt=""  style={window.innerWidth <=700 ? { width : "15rem" , cursor : "pointer"} : {width : "100%" , cursor : "pointer"}} onClick={()=>navigate('/')} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav style={{width : "70%" , display : "flex" , justifyContent : "space-around" , fontSize : "1.1rem" }}>
                    <Nav.Link eventKey={1} onClick={()=>navigate('/')} style={ window.location.pathname === '/' ? { fontWeight : '500' , color : 'black' } : { fontWeight : '300' , color : "black" }}>Home</Nav.Link>
                    <Nav.Link eventKey={2} onClick={()=>navigate('/about')} style={ window.location.pathname === '/about' ? { fontWeight : '500' , color : 'black' } : { fontWeight : '300' , color : "black" }}>About Us</Nav.Link>
                    <Nav.Link eventKey={3} onClick={()=>navigate('/services')} style={ window.location.pathname === '/services' ? { fontWeight : '500' , color : 'black' } : { fontWeight : '300' , color : "black" }}>Our Services</Nav.Link>
                    <Nav.Link eventKey={4} onClick={()=>navigate('/projects')} style={ window.location.pathname === '/projects' ? { fontWeight : '500' , color : 'black' } : { fontWeight : '300' , color : "black" }}>Projects</Nav.Link>
                    <Nav.Link eventKey={5} onClick={()=>navigate('/contact')} style={ window.location.pathname === '/contact' ? { fontWeight : '500' , color : 'black' } : { fontWeight : '300' , color : "black" }}>Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
