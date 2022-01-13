import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './FeatureCard.css'


function FeatureCard() {
    const navigate = useNavigate()
    return (
        <Container className='feature_card'>
            <Row sm={1}>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 2.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Building Plan</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 3.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>3D Elevation</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' , cursor : "pointer" }} onClick={()=>navigate('/estimation')}>
                    <Card.Img variant="top" src="./images/Mask Group 4.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Estimation</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 5.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Contractors</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 6.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Consulting</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 7.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Landscaping</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default FeatureCard
