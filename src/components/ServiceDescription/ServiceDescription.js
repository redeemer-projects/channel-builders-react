import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServiceDescription.css'

function ServiceDescription() {
    const navigate = useNavigate()
    return (
        <div className='servicedescription'>
            <Container>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h6 className="aboutus_title">
                            SERVICES
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
                <Row style={{ padding : "1rem"}}>
                    <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                        <ServiceCard  
                        bImgUrl = {"./images/Group 178Black.png"}
                        oImgUrl={"./images/Group 178.png"}
                        title={"Building Plan"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </Col>
                    <Col md={4}  sm={12} >
                        <ServiceCard  
                        bImgUrl = {"./images/Group 179Black.png"}
                        oImgUrl={"./images/Group 179.png"}
                        title={"3D Elevation"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </Col>
                    <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}} >
                        <ServiceCard  
                        bImgUrl = {"./images/Group 180Black.png"}
                        oImgUrl={"./images/Group 180.png"}
                        title={"Estimation"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        navigation={'/estimation'}
                        />
                    </Col>
                    <Col md={4} sm={12} style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
                        <ServiceCard  
                        bImgUrl = {"./images/Group 182Black.png"}
                        oImgUrl={"./images/Group 182.png"}
                        title={"Contractors"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </Col>
                    <Col md={4} sm={12} style={{ display : "flex" , justifyContent : 'center' }}>
                        <ServiceCard  
                        bImgUrl = {"./images/Group 181Black.png"}
                        oImgUrl={"./images/Group 181.png"}
                        title={"Consulting"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </Col>
                    <Col md={4} sm={12} style={{ display : "flex" , justifyContent : 'center' }}>
                        <ServiceCard  
                        bImgUrl = {"./images/Path 1702Black.png"}
                        oImgUrl={"./images/Path 1747.png"}
                        title={"Building Plan"}
                        description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                        />
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

export default ServiceDescription
