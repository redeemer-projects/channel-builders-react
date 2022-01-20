import React, { useContext, useState } from 'react'
import EstimationDescription from '../components/EstimationDescription/EstimationDescription'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import ProjectBanner from '../components/ProjectBanner/ProjectBanner'
import { ContentContext } from '../context/ContentContext'

function Estimaton() {
    const {contentDetails} = useContext(ContentContext)
    console.log(contentDetails);
    return (
        <div>
            <NavigationBar />
            <ProjectBanner />
            {
                (()=>{
                    switch (contentDetails) {
                        case 'buildingplan':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"BUILDING PLAN"}
                                slider={"buildingplan"}
                                />
                            break;
                        case '3delevation':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"3D ELEVATION"}
                                slider={"3delevation"}
                                />
                            break;
                        case 'estimation':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"ESTIMATION"}
                                slider={"estimation"}
                                />
                            break; 
                        case 'contractors':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"CONTRACTORS"}
                                slider={"contractors"}
                                />
                            break;        
                        case 'ac':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"ARCHITECTURAL CONSULTING"}
                                slider={"ac"}
                                />
                            break;
                        case 'landscaping':
                            return <EstimationDescription  
                                description={"Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"}
                                head={"LANDSCAPING"}
                                slider={'landscaping'}
                                />
                            break;            
                        default:    
                            break;
                    }
                })()
            }
            <Footer />
        </div>
    )
}

export default Estimaton
