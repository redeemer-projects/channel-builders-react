import React from 'react'
import DreamHome from '../components/DreamHome/DreamHome'
import EstimationDescription from '../components/EstimationDescription/EstimationDescription'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import ProjectBanner from '../components/ProjectBanner/ProjectBanner'

function Estimaton() {
    return (
        <div>
            <NavigationBar />
            <ProjectBanner />
            <EstimationDescription />
            <Footer />
        </div>
    )
}

export default Estimaton
