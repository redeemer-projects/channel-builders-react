import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './ProjectBanner.css'

function ProjectBanner() {
    return (
        <Container fluid>
            <div style={{ display : "grid" , gridTemplateColumns : '1fr 1fr' , gridGap : '0.5rem' }}>
                <div className='img_right'>
                    <img src="./images/Mask Group 20.png" alt="" className="d-block w-100 h-100" />
                    <Card style={{ width: '26rem' , boxShadow : '-5px 0px 20px rgb(221, 221, 221)' , borderRadius : "0px" , position : "absolute" , top : "70%" , left : "20%" , transform : "translate(-20%,-70%) " }} >
                    <Card.Body>
                        <Card.Title style={{ fontSize : '1.5rem' ,fontWeight : "700" }}>OUR CURRENT PROJECT</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary" style={{ background : "#F45905" , border : "none" }} >View Details <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </Card.Body>
                    </Card>
                </div>
                <div style={{ display : "grid" , gridTemplateRows : '' }}>
                    <div>
                        <img src="./images/Group 180right.png" alt="" className="d-block w-100" />
                    </div>   
                </div>
            </div>     
        </Container>
    )
}

export default ProjectBanner
