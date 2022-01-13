import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function ServiceCard({bImgUrl,oImgUrl,title,description,navigation}) {
    const [iconColor,setIconColor] = useState(bImgUrl)
    const navigate = useNavigate()
    return (
        <div style={{ display : 'flex' , alignItem : "center" , justifyContent : "center"}} onClick={()=>navigate(navigation)}>
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
