import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './DreamHome.css'

function DreamHome() {
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
                        <Button style={{color : 'black' , backgroundColor : 'white' , border : "0px" , borderRadius : '0px' ,transform: 'scale(1.4)' , width : '10rem'}}>Contact us</Button>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default DreamHome
