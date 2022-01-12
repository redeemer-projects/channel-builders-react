import { faEnvelopeOpen, faEnvelopeOpenText, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactDetails.css'
import { Col, Container, Row } from 'react-bootstrap'


function ContactDetail() {
    return (
        <div className='contactdetails'>
            <Container>
                <Row>
                    <Col md={6} style={{ display : "flex" , flexDirection : "column" , justifyContent : "space-around" , height : "40vh"}}>
                        <h2>CONTACT DETAILS</h2>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faMapMarkerAlt } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }} > Pallimukku | Kollam | Kottarakara</p>
                        </div>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faEnvelopeOpenText } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }}> info@channelbuilders.com </p>
                        </div>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faPhoneSquareAlt } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }}> +91 789564221,+91 545454545</p>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</p>
                    </Col>
                    <Col md={6} style={{ display : "flex" , flexDirection : "column" , justifyContent : "space-around" , height : "40vh"}}>
                        <h2>BRANCH DETAILS</h2>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faMapMarkerAlt } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }} > Pallimukku | Kollam | Kottarakara</p>
                        </div>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faEnvelopeOpenText } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }}> info@channelbuilders.com </p>
                        </div>
                        <div className="contact">
                            <FontAwesomeIcon icon={ faPhoneSquareAlt } size="lg"/>
                            <p style={{ marginLeft : '1rem' , alignItems : 'center' , display : "flex" }}> +91 789564221,+91 545454545</p>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ContactDetail
