import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './FeatureCard.css'

function FeatureCard() {
    return (
        <Container className='feature_card'>
            <Row >
                <Col md={4}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 2.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Building Plan</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 3.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>3D Elevation</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 4.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Estimation</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 5.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Contractors</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '24rem', border : 'none' }}>
                    <Card.Img variant="top" src="./images/Mask Group 6.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title>Consulting</Card.Title>
                        </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
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