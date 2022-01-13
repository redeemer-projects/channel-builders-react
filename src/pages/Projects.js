import React from 'react'
import CompletedProject from '../components/CompletedProjects/CompletedProject'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import ProjectBanner from '../components/ProjectBanner/ProjectBanner'
import ProjectDescription from '../components/ProjectDescription/ProjectDescription'
import DreamHome from '../components/DreamHome/DreamHome'
import Footer from '../components/Footer/Footer'
 
function Projects() {
    return (
        <div>
            <NavigationBar />
            <ProjectBanner />
            <ProjectDescription />
            <CompletedProject />
            <DreamHome />
            <Footer />
        </div>
    )
}

export default Projects
