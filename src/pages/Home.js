import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import DreamHome from '../components/DreamHome/DreamHome'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import Footer from '../components/Footer/Footer'
import Modern from '../components/Modern/Modern'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Partners from '../components/Partners/Partners'

function Home() {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <FeatureCard />
            <AboutUs />
            <Partners />
            <Modern />
            <DreamHome />
            <Footer /> 
        </div>
    )
}

export default Home
