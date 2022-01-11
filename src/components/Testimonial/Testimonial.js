import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Testimonial.css'

function Testimonial() {
    return (
        <div>
            <div className="background_image">

            </div>
            <Container style={{marginTop : '-200px'}}>
            <h2 class="fw-bold text-center ">
                Clients Testimonial
            </h2>
            <p class="text-center ">Lorem Ipsum is simply dummy</p>
            <Row className='testimonial_profile'>
                <Col md={3} >
                <Card style={{ width: '18rem' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px' }}>
                <Card.Body>
                    <Card.Text>
                    Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 
                    </Card.Text>
                    <Card.Title>
                    <div class="row px-3">
                        <div class="col-4">
                            <img src="images/Mask Group 14.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-8" style={{textAlign : 'left'}}>
                            <p class="fw-bold" style={{ fontSize : '12px'}}>
                                Lorem Ipsum is simply
                            </p>
                            <p style={{ fontSize : '12px'}}>
                                Ernakulam
                            </p>
                        </div>
                    </div>
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col >

                <Col md={3}  >
                <Card style={{ width: '18rem'  , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px'}}>
                <Card.Body>
                    <Card.Text>
                    Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 
                    </Card.Text>
                    <Card.Title>
                    <div class="row px-3">
                        <div class="col-4">
                            <img src="images/Mask Group 14.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-8" style={{textAlign : 'left'}}>
                            <p class="fw-bold" style={{ fontSize : '12px'}}>
                                Lorem Ipsum is simply
                            </p>
                            <p style={{ fontSize : '12px'}}>
                                Ernakulam
                            </p>
                        </div>
                    </div>
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col>

                <Col md={3} >
                <Card style={{ width: '18rem',  boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : '0px' }}>
                <Card.Body>
                    <Card.Text>
                    Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 
                    </Card.Text>
                    <Card.Title>
                    <div class="row px-3">
                        <div class="col-4">
                            <img src="images/Mask Group 14.png" class="img-fluid" alt="" />
                        </div>
                        <div class="col-8" style={{textAlign : 'left'}}>
                            <p class="fw-bold" style={{ fontSize : '12px'}}>
                                Lorem Ipsum is simply
                            </p>
                            <p style={{ fontSize : '12px'}}>
                                Ernakulam
                            </p>
                        </div>
                    </div>
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>

            </Container>
        </div>
    )
}

export default Testimonial
