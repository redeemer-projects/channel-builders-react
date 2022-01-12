import React from 'react'
import { Col, Container, Nav,  Navbar,  NavbarBrand,  NavLink,  Row } from 'react-bootstrap'
import './NavigationBar.css'
import 'bootstrap/dist/css/bootstrap.css';
function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
              <Container>
                <Navbar.Brand href="#home"><img src="./images/Channel_logo.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav style={{width : "70%" , display : "flex" , justifyContent : "space-around" , fontSize : "1.1rem"}}>
                    <Nav.Link eventKey={1} href="#">Home</Nav.Link>
                    <Nav.Link eventKey={2} href="#">About Us</Nav.Link>
                    <Nav.Link eventKey={3} href="#">Our Services</Nav.Link>
                    <Nav.Link eventKey={4} href="#">Projects</Nav.Link>
                    <Nav.Link eventKey={5} href="#">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
