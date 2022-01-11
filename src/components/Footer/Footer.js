import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
function Footer() {
    return (
        <div className='Footer'>
            <Container>
                <Row className='Footer_Content'>
                    <Col md={4}>
                    <h4 class="fw-bold text-white">
                        About Us.
                    </h4>
                    <p class="mt-5" style={{fontSize : "12px" , color: "white"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <img class="img-fluid mt-5" src="images/Group 96.png" alt="" />
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={6}>
                            <h4 class="fw-bold text-white">
                                Useful Link
                            </h4>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3">About Us</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Our Services</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Portfolio</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Our Policy</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Gallery</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3">Contact Us</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3">Blog</h6>
                            </Col>
                            <Col md={6}>
                            <h4 class="fw-bold text-white">
                                Help?
                            </h4>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> FAQ</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Term & Condtions</h6>
                            <h6 style={{ color : "white" , fontWeight : "300" , fontSize : "12px"}} class="mt-3"> Our Policy</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}> 
                        <img src="images/footer_logo.png" alt="" />
                        <p class="mt-4" style={{fontSize : "12px" , color : 'white'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                        <p class="mt-4" style={{fontSize : "12px" , color : 'white'}}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />       Pallimukku | Kollam | Kottarakkara
                        
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
