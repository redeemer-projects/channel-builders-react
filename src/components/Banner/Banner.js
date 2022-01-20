import React, { useEffect, useState } from 'react'

import './Banner.css'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from 'react-bootstrap'

import axios from "../../axios/axios"

function Banner() {
    const [images,setImages] = useState()
    useEffect(()=>{
        const response = axios.get('/home-carousal?api_key=test_key').then((response)=>{
            setImages(response.data)
        })
    },[])
    return (
        <Carousel interval={1000}>
            { images &&
                images.map((obj,index)=>(
                    <CarouselItem key={index}>
                        <img
                        className="d-block w-100"
                        src={`http://192.168.0.100:3006` +obj}
                        alt="First slide"
                        />
                    </CarouselItem>
                )) 
            }
        </Carousel>
    )
}

export default Banner
