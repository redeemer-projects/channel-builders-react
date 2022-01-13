import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

import './Modern.css'

function Modern() {
    return (
        <Container className='modern_card'>
            <Row>
                <Col md={4} sm={4} className='col_card'>
                <Card style={{border: "none" ,
                            borderRadius: "0",  
                            position: "absolute",
                            width: "50%",
                            padding: "5rem 1rem",
                            boxShadow: "-5px 0px 20px rgb(221, 221, 221)"}}>
                    <Card.Body>
                    <h2 class="fw-bold">
                        Your Perfect & Modern <br/>
                        Living Space Waits!
                    </h2><br/><br/>
                    <p class="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum magnam eos? Eos ex, suscipit molestias aut placeat fugiat blanditiis nihil. Cupiditate consequatur provident delectus facere voluptate praesentium est nisi?
                    </p><br/>
                    <button className="learn_more_button">Learn more  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={8} sm={8}>
                    <Image fluid src='./images/interior.png'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Modern
