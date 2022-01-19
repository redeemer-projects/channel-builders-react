import { Button , TextField } from '@mui/material'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ContactForm.css"


function ContactForm() {
    const [fullName,setFullName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [message,setMessage] = useState()

    const handleSend = async (e) =>{
        console.log(fullName);
        console.log(email);
        console.log(phone);
        console.log(message);
    }
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
                        <TextField id="standard-basic" label="Full Name" variant="standard" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                        <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField id="standard-basic" label="Phone Number" variant="standard" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                            variant="standard"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                        <Button variant="contained" style={{ background : '#F45905' }} onClick={handleSend}> Send</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm
