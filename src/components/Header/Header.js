import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Header.css'
import { faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <div style={{ backgroundColor : "#092B3D" ,minHeight : "5vh"}}>
            <Container>
                <Row>
                    <Col md = {6}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" style={{fontSize : "small" }} href="#">Kollam, Kerala</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" style={{fontSize : "small"}} href="#"> info@channelsbuilders.com</a>
                        </li>
                        </ul>
                    </div>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
