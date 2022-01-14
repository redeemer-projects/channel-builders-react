import React from 'react'
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import './Partners.css'
function Partners() {
    return (
        <Container className='partners'>
            <div className='partner_title'>
                <h6 style={{color: '#F45905'}}>
                    ABOUT US
                    </h6>
                    <h2 class="fw-bold">
                    Our Awesome Partners
                    </h2>
            </div>
            <Row>
                <Col md={3} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                    <Card style={{ width: '18rem', border : 'none' }}>
                        <CardImg variant="top" src="./images/Channel_logo.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title style={{fontSize : '1rem'}}>Glass & Plywood </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                    <Card style={{ width: '18rem' , border : 'none' }}>
                        <CardImg variant="top" src="./images/Channel_logo.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title style={{fontSize : '1rem'}}>Event Management</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                    <Card style={{ width: '18rem' , border : 'none'}}>
                        <CardImg variant="top" src="./images/Channel_logo.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title style={{fontSize : '1rem'}}>Alluminum Fabrication </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                    <Card style={{ width: '18rem' , border : 'none'}}>
                        <CardImg variant="top" src="./images/Channel_logo.png" />
                        <Card.Body style={{textAlign : 'center'}}>
                            <Card.Title style={{fontSize : '1rem'}}>Gypsum Plastering & False Ceiling</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Partners
