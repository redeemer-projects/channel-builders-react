import React from 'react'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import AboutVideo from '../components/AboutVideo/AboutVideo'
import BannerAbout from '../components/BannerAbout/BannerAbout'
import DreamHome from '../components/DreamHome/DreamHome'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Ourteam from '../components/OurTeam/Ourteam'

function About() {
    return (
        <div>
            <NavigationBar />
            <BannerAbout />
            <AboutDescription />
            <AboutVideo />
            <Ourteam />
            <DreamHome />
            <Footer />
        </div>
    )
}

export default About
