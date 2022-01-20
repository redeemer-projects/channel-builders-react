import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommenSlider from '../CommenSlider/CommenSlider'
import axios from '../../axios/axios'

function EstimationDescription({head,description,slider}) {
    const [elevationSlider,setElevationSlider] = useState()
    const [planSlider,setPlanSlider] = useState()
    const [estimationSlider,setEstimationSlider] = useState()
    const [contractorsSlider,setContractorsSlider] = useState()
    const [consultSlider,setConsultSlider] = useState()
    const [landscapeSlider,setLandScapeSlider] = useState()
    useEffect(()=>{
        const response = axios.get('/subcarousals?api_key=test_key').then((response)=>{
            setElevationSlider(response.data.elevation)
            setPlanSlider(response.data.plan)
            setEstimationSlider(response.data.estimation)
            setContractorsSlider(response.data.contractors)
            setConsultSlider(response.data.consult)
            setLandScapeSlider(response.data.landscape)    
        })
    },[])
    return (
        <div style={{
            marginTop : '5rem' , height : "100vh"}}>
            <Container style={{ padding : "2rem" }}>
                <Row>
                <Col md={6}> 
                    <div className='Aboutus_content'>
                        <h2 className="aboutus_heading">
                        {head}
                        </h2>
                        <h6 className="aboutus_tag">
                            {description}
                            <br /><br />
                        </h6>
                    </div>
                </Col>
                <Col md={6}>
                    {
                        (()=>{
                            switch(slider){
                                case 'buildingplan' : 
                                    return <CommenSlider slide={planSlider} />
                                    break;
                                case '3delevation' :
                                    return <CommenSlider slide={elevationSlider} />
                                    break;
                                case 'estimation' :
                                    return <CommenSlider slide={estimationSlider} />
                                    break;
                                case 'contractors' :
                                    return <CommenSlider slide={contractorsSlider} />
                                    break;
                                case 'ac' :
                                    return <CommenSlider slide={consultSlider} />
                                    break;
                                case 'landscaping' :
                                    return <CommenSlider slide={landscapeSlider} />
                                    break;
                                default:    
                                break;
                            }
                        })()
                    }
                    
                </Col>
                </Row>
                <Row>
                {/*    <ImageGrid /> */}
                </Row>
                </Container> 
        </div>
    )
}

export default EstimationDescription
