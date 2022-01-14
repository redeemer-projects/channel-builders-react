import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutCarousel from '../AboutCarousel/AboutCarousel'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom'

function AboutUs() {
    const navigate = useNavigate()
    return (
        <Container className='Aboutus'>
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
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </h6>
                        <button className="learn_more_button" onClick={()=>navigate('/about ')}>Learn more <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </div>
                </Col>
                <Col md={6}>
                    <AboutCarousel />
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs
