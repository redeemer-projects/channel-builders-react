import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

function CommenSlider({slide}) {
  return ( 
    <div>
        <Carousel interval={1000}>
           { slide &&
               slide.map((obj,index)=>(
                    <CarouselItem key={index} >
                        <img
                        className="d-block w-100"
                        src={`http://192.168.0.100:3006` + obj}
                        alt="First slide"
                        />
                    </CarouselItem>
               ))
           } 
                    
             
            
        </Carousel>
    </div>
  )
}

export default CommenSlider;
