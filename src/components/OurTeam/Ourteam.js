import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Ourteam.css'
function Ourteam() {
    return (
        <Container className='ourteam'>
            <div className="Ourteam_content">
                <h2 class="fw-bold">Our Team</h2>
                <h6 class="small">Lorem Ipsum is simply dummy text of the printing </h6>
                <Row className='profiles'>
                    <Col md={3}>
                    <div className='profile'>
                        <Card style={{ width: '18rem' ,border : '15px solid white' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px' }}>
                            <Card.Img variant="top" src="./images/Mask Group 11.png" style={{ borderRadius : '0px' }}/>
                        </Card>
                        <Card style={{ width: '14rem' , borderRadius : '0px' , border : 'none' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , marginTop : '-3rem'}}>
                            <Card.Body>
                                <Row>
                                    
                                    <Col md={12} className='profileName'>
                                    <div className="profileContent">
                                        <h5 class="fw-bold" >Tahmina Rummi</h5>
                                        <hr/>
                                        <h6 class="small text-grey-400">Property Seller</h6>
                                    </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>

                    <Col md={3}>
                    <div className='profile'>
                        <Card style={{ width: '18rem' ,border : '15px solid white' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px'}}>
                            <Card.Img variant="top" src="./images/Mask Group 11.png" style={{ borderRadius : '0px' }}/>
                        </Card>
                        <Card style={{ width: '14rem' , borderRadius : '0px' , border : 'none' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , marginTop : '-3rem'}}>
                            <Card.Body>
                                <Row>
                                    <Col md={12} className='profileName'>
                                    <div className="profileContent">
                                        <h5 class="fw-bold" >Tahmina Rummi</h5>
                                        <hr/>
                                        <h6 class="small text-grey-400">Property Seller</h6>
                                    </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>

                    <Col md={3}>
                    <div className='profile'>
                        <Card style={{ width: '18rem' ,border : '15px solid white' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px'}}>
                            <Card.Img variant="top" src="./images/Mask Group 11.png" style={{ borderRadius : '0px' }}/>
                        </Card>
                        <Card style={{ width: '14rem' , borderRadius : '0px' , border : 'none' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , marginTop : '-3rem'}}>
                            <Card.Body>
                                <Row>
            
                                    <Col md={12} className='profileName'>
                                    <div className="profileContent">
                                        <h5 class="fw-bold" >Tahmina Rummi</h5>
                                        <hr/>
                                        <h6 class="small text-grey-400">Property Seller</h6>
                                    </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Ourteam
