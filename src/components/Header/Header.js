import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Header.css'
import { faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <div className='header'>
            <div className="header_content">
                <div className="header_left">
                    <div className="header_left_location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p> Kollam, Kerala</p>
                    </div>
                    <div className="header_left_email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>info@channelbuilders.com</p>
                    </div>
                </div>
                <div className="header_right">
                    <div className="header_right_socialmedia">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>

                    </div>
                    <div className="header_right_booknow">
                        Book Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
