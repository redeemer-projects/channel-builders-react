import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <Container className='navbar_content'>
                <Row className='navbar'>
                    <Col lg={6} sm={12} className='navbar_img'>
                        <a href="#">
                            <img src="./images/Channel_logo.png" alt="" />
                        </a>
                    </Col>
                    <Col lg={6}>
                        <Row className='navbar_links'>
                           <Col lg='auto' sm='auto' xs={2}><a href="#">Home</a></Col> 
                           <Col lg='auto' sm='auto' xs={2}><a href="#">About Us</a></Col> 
                           <Col lg='auto' sm='auto' xs={2}><a href="#">Our Services</a></Col> 
                           <Col lg='auto' sm='auto' xs={2}><a href="#">Projects</a></Col> 
                           <Col lg='auto' sm='auto' xs={2}><a href="#">Contact Us</a></Col> 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
