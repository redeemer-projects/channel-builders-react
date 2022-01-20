import React from 'react'
import BannerImage from '../components/BannerAbout/BannerImage'
import ContactDetail from '../components/ContactDetails/ContactDetail'
import ContactForm from '../components/ContactFrom/ContactForm'
import ContactMap from '../components/ContactMap/ContactMap'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import DreamHome from '../components/DreamHome/DreamHome'
import Footer from '../components/Footer/Footer' 

function Contact() {
    return (
        <div>
            <NavigationBar />
            <BannerImage imgUrl={"./images/Mask Group 422.jpg"} />
            <ContactForm />
            <ContactDetail />
            <ContactMap />
            <Footer />
        </div>
    )
}

export default Contact
