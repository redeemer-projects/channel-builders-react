import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGrid from '../ImageGrid/ImageGrid'

function EstimationDescription() {
    return (
        <div style={{
            marginTop : '5rem'}}>
            <Container style={{ padding : "2rem" }}>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            PLANS
                        </h6>
                        <h2 className="aboutus_heading">
                        OUR PROJECTS
                        BUILDING PLANS & ESTIMATION
                        </h2>
                        <h6 className="aboutus_tag">
                            Lorem Ipsum is simply dummy text of the printing
                            Lorem Ipsum is simply dummy text of the printing
                            Lorem Ipsum is simply dummy text of the printing
                            <br /><br />
                            
                        </h6>
                    </div>
                </Col>
                </Row>
                <Row>
                    <ImageGrid />
                </Row>
                </Container> 
        </div>
    )
}

export default EstimationDescription
