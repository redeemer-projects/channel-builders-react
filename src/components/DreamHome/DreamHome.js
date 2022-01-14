import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './DreamHome.css'

function DreamHome() {
    const buttonStyle1 = {
        color : 'black' , backgroundColor : 'white' , border : "0px" , borderRadius : '0px' ,transform: 'scale(1.4)' , width : '10rem'
    }
    const buttonStyle2 = {
        color : 'white' , backgroundColor : '#181B2A' , border : "0px" , borderRadius : '0px' ,transform: 'scale(1.4)' , width : '10rem'
    }
    const [btnStyle,setBtnStyle] = useState(buttonStyle1)
    const navigate = useNavigate()
    return (
        <Container className='DreamHome'>
            <Card className='Dreamcard' style={{backgroundColor : "#F45905" , transform: 'translate(0,50%) scale(0.8)'  }}>
            <Card.Body>
                <Row style={{ display : 'flex' , alignItems : "center" , margin : "1.5rem"}}>
                    <Col md={9}>
                        <h2>looking for a dream home ?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore.</p>
                    </Col>
                    <Col md={3}>
                        <Button style={btnStyle} onMouseEnter={()=>setBtnStyle(buttonStyle2)} onMouseLeave={()=>setBtnStyle(buttonStyle1)} onClick={()=>navigate('/contact')}>Contact us</Button>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default DreamHome
