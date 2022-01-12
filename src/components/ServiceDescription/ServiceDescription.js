import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServiceDescription.css'

function ServiceDescription() {
    const [iconColor,setIconColor] = useState('./images/Group 178Black.png')
    return (
        <div className='servicedescription'>
            <Container>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            ABOUT US
                        </h6>
                        <h3 className="aboutus_heading">
                            GET THE BEST ADVANTAGE SERVICES
                        </h3>
                        <h6 className="aboutus_tag">
                            Lorem Ipsum is simply dummy text of the printing
                            <br /><br />
                        </h6>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ServiceCard />
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

export default ServiceDescription
