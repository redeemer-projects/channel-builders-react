import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCarousel from '../AboutCarousel/AboutCarousel'

function EstimationDescription({head,description,slider}) {
    return (
        <div style={{
            marginTop : '5rem' , height : "100vh"}}>
            <Container style={{ padding : "2rem" }}>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h2 className="aboutus_heading">
                        {head}
                        </h2>
                        <h6 className="aboutus_tag">
                            {description}
                            <br /><br />
                        </h6>
                    </div>
                </Col>
                <Col md={6}>
                    <AboutCarousel title={slider}/>
                </Col>
                </Row>
                <Row>
                {/*    <ImageGrid /> */}
                </Row>
                </Container> 
        </div>
    )
}

export default EstimationDescription
