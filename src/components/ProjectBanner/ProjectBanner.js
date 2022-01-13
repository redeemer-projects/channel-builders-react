import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ProjectBanner.css'

function ProjectBanner() {
    return (
        <Container fluid={true}>
             <Row md={12}>
                 <Col md={6} sm={6} className='current_project'>
                    <div style={{ width : '100%' , background: 'rgba(97,97,96, 0.5)' , height : "100%"}}>
                        
                    </div>
                 </Col>
                 <Col md={6} sm={6}>
                    <Row style={{ right : 0 }} sm={6}>
                        <img src="./images/Mask Group 5.png" alt=""  className="d-block w-100"/>
                    </Row>
                    <Row sm={6}>
                        <img src="./images/Mask Group 5.png" alt="" className="d-block w-100"/>
                    </Row>
                 </Col>
             </Row>
        </Container>
    )
}

export default ProjectBanner
