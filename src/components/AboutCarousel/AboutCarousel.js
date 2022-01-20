import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

function AboutCarousel(title) {
    useEffect(()=>{
        
    })
    return (
        <div>
            <Carousel interval={1000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='./images/Mask Group 20.png'
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='./images/Mask Group 20.png'
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='./images/Mask Group 20.png'
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default AboutCarousel
