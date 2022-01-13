import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGrid from '../ImageGrid/ImageGrid'

function ProjectDescription() {
    return (
        <div style={{
            marginTop : '5rem',
            padding: '2rem'}} >
            <Container>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            ABOUT US
                        </h6>
                        <h2 className="aboutus_heading">
                            With our knowledge
                            we guaranty success
                        </h2>
                        <h6 className="aboutus_tag">
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

export default ProjectDescription
