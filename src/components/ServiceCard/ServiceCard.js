import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function ServiceCard({bImgUrl,oImgUrl,title,description}) {
    const [iconColor,setIconColor] = useState(bImgUrl)
    return (
        <div style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}}>
            <Card style={{ width: '22rem' , alignItems : "center" , padding : "3rem" , margin : "1rem"}}>
                    <Card.Img variant="top" src={iconColor} style={{ width : '30%' }} onMouseEnter={()=>setIconColor(oImgUrl)} onMouseLeave={()=>setIconColor(bImgUrl)} />
                        <Card.Body style={{textAlign : "center"}}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            {description}
                            </Card.Text>
                        </Card.Body>
            </Card>
        </div>
    )
}

export default ServiceCard
