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
                        src={`http://localhost:3006` + obj}
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
