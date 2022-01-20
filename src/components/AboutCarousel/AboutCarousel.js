import React, { useEffect, useState } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import axios from '../../axios/axios'
function AboutCarousel() {
    const [aboutSlide,setAboutSlide] = useState()
    useEffect(()=>{
        const response = axios.get('/subcarousals?api_key=test_key').then((response)=>{
            setAboutSlide(response.data.about)
        })
    },[])
    return (
        <div>
            <Carousel interval={1000}>
            { aboutSlide &&
                aboutSlide.map((obj,index)=>(
                    <CarouselItem key={index}>
                        <img
                        className="d-block w-100"
                        src={`http://localhost:3006` +obj}
                        alt="First slide"
                        />
                    </CarouselItem>
                )) 
            }
            </Carousel>
        </div>
    )
}

export default AboutCarousel
