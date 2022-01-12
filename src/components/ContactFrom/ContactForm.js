import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button , TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ContactForm.css"
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { height } from '@mui/system';

function ContactForm() {
    

    return (
        <div className='contactform'>
            <Container>
                <Row>
                    <Col md={6}>
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            Contact Us
                        </h6>
                        <h2 className="aboutus_heading">
                            GET IN TOUCH
                        </h2>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} style={{display : 'flex' , flexDirection : " column"  , justifyContent : "space-around" , height : "60vh"}}>
                        <TextField id="standard-basic" label="Full Name" variant="standard" />
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <TextField id="standard-basic" label="Phone Number" variant="standard" />
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                        <Button variant="contained" style={{ background : '#F45905' }}>Send Proposal <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm
