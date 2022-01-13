import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function ContactMap() {
    
    return (
        <div style={{ transform: 'translate(0,35%)'}}>
            <Wrapper apiKey={"YOUR_API_KEY"}>
                
            </Wrapper>

            <img
                className="d-block w-100"
                src="./images/Mask Group 41.png"
                alt="First slide"
                />
        </div>
    )
}

export default ContactMap
