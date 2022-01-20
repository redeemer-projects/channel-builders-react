import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ContentContext } from '../../context/ContentContext';

function ServiceCard({bImgUrl,oImgUrl,title,description,navigation,route}) {
    const cardStyle1 ={ width: '22rem' , alignItems : "center" , padding : "3rem" , margin : "1rem" , transform : "scale(1)" , transition : "all  250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s"};
    const cardStyle2 ={ width: '22rem' , alignItems : "center" , padding : "3rem" , margin : "1rem" , backgroundColor : "#F6F6F5" , transform : 'scale(1.1)' , transition : "all  250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s"};
    const [iconColor,setIconColor] = useState(bImgUrl)
    const [crdStyle,setCrdStyle] = useState(cardStyle1)
    const navigate = useNavigate()

    const {setContentDetails} = useContext(ContentContext)
    return (
        <div style={{ display : 'flex' , alignItem : "center" , justifyContent : "center" }} 
        onClick={()=>{navigate(navigation)
            setContentDetails(route)
        }}>
            <Card style={crdStyle} onMouseEnter={()=>{
                setCrdStyle(cardStyle2)
                setIconColor(oImgUrl)
            }} onMouseLeave={()=>{
                setCrdStyle(cardStyle1)
                setIconColor(bImgUrl)
            }}>
                    <Card.Img variant="top" src={iconColor} style={{ width : '30%' }} />
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
