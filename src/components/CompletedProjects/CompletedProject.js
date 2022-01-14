import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutVideo from '../AboutVideo/AboutVideo'

function CompletedProject() {
    return (
        <div style={{
            marginTop : '5rem'}}>
            <Container style={{ padding : "3rem" }}>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            PROJECTS
                        </h6>
                        <h3 className="aboutus_heading">
                        OUR COMPLETED
                        PROJECT VISUALS
                        </h3>
                        <h6 className="aboutus_tag">
                            Lorem Ipsum is simply dummy text of the printing
                            Lorem Ipsum is simply dummy text of the printing
                            Lorem Ipsum is simply dummy text of the printing
                            <br /><br />
                            
                        </h6>
                    </div>
                </Col>
                </Row>
                </Container>
                <AboutVideo />
        </div>
    )
}

export default CompletedProject
