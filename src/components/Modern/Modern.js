import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

import './Modern.css'

function Modern() {
    return (
        <Container className='modern_card'>
            <Row>
                <Col className='col_card' md={4}>
                <Card className='content_card'>
                    <Card.Body>
                    <h2 class="fw-bold">
                        Your Perfect & Modern <br/>
                        Living Space Waits!
                    </h2><br/><br/>
                    <p class="small">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum magnam eos? Eos ex, suscipit molestias aut placeat fugiat blanditiis nihil. Cupiditate consequatur provident delectus facere voluptate praesentium est nisi?
                    </p><br/>
                    <button className="learn_more_button">Learn more <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={8}>
                    <Image fluid src='./images/interior.png'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Modern
