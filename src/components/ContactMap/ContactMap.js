import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ContactMap.css'
function ContactMap() {
    
    return (
        <Container className='Map_Component' fluid>
            <Row>
                <Col>
                    <div className="event_map">
                        <h5>CHANNELS BUILDERS</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.</p>
                        <button><a href='#'>View large map</a></button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactMap
