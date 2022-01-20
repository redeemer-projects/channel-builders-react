import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './Modern.css'

function Modern() {
    const media1 ={border : "none" ,
    borderRadius : "0px",
    width: "50%" ,
    position: "absolute",
    fontSize : "1.2rem",
    padding: "5rem 1rem" ,
    boxShadow :  "-5px 0px 20px rgb(221, 221, 221)"}
    const media2 = {border : "none" ,
    borderRadius : "0px",
    fontSize : ".5rem" ,
    padding : "1rem 0.5rem",
    width: "70%" ,
    boxShadow :  "-5px 0px 20px rgb(221, 221, 221)",
    transform : "translate(20%,30%)"
}
    const navigate = useNavigate()
    return (
        <Container className='modern_card' >
            <Row>
                <Col md={4} sm={12} style={{display : "flex", alignItems : "center"}}>
                <Card style={ window.innerWidth <= 600 ? media2 : media1}>
                    <Card.Body>
                    <h3 style={ window.innerWidth <= 600 ? {fontSize : "1.3rem"} : {fontSize : "2rem"} }>
                        Your Perfect & Modern <br/>
                        Living Space Waits!
                    </h3><br/><br/>
                    <p className="small_paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum magnam eos? Eos ex, suscipit molestias aut placeat fugiat blanditiis nihil. Cupiditate consequatur provident delectus facere voluptate praesentium est nisi?
                    </p><br/>
                    <button className="learn_more_button" onClick={()=>navigate('/about')}>Learn more  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={8} sm={12}>
                    <Image fluid src='./images/interior.png'/>
                </Col>
            </Row>
        </Container>
    )
}

export default Modern
