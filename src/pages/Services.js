import React from 'react'
import BannerImage from '../components/BannerAbout/BannerImage'
import Footer from '../components/Footer/Footer'
import NavigationBar from "../components/NavigationBar/NavigationBar"
import ServiceDescription from '../components/ServiceDescription/ServiceDescription'
function Services() {
    return (
        <div>
            <NavigationBar />
            <BannerImage imgUrl={"./images/Mask Group 36.png"} />
            <ServiceDescription />
            <Footer />
        </div>
    )
}

export default Services
