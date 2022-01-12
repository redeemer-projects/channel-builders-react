import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function ServiceCard() {
    const [iconColor,setIconColor] = useState('./images/Group 178Black.png')
    return (
        <div>
            <Card style={{ width: '20rem' , alignItems : "center" , padding : "3rem" }}>
                    <Card.Img variant="top" src={iconColor} style={{ width : "30%" }} onMouseEnter={()=>setIconColor("./images/Group 178.png")} onMouseLeave={()=>setIconColor("./images/Group 178Black.png")} />
                        <Card.Body style={{textAlign : "center"}}>
                            <Card.Title>Building Plan</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceCard
