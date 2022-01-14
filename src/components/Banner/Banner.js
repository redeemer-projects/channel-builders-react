import React from 'react'

import './Banner.css'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'


function Banner() {
    return (
        <Carousel interval={1000}>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="./images/TRD Home 1.png"
                alt="First slide"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="./images/TRD Home 2.png"
                alt="Second slide"
                />   
            </CarouselItem>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="./images/TRD Home 3.png"
                alt="Third slide"
                />
            </CarouselItem>
            <CarouselItem>
                <img
                className="d-block w-100"
                src="./images/TRD Home 4.png"
                alt="Third slide"
                />
            </CarouselItem>
        </Carousel>
    )
}

export default Banner
