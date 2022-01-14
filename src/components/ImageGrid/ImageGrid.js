import React from 'react'
import { Container } from 'react-bootstrap'
import './ImageGrid.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGrid() {
    const settings = {
        arrows : true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 250,
        rows: 2,
        slidesPerRow: 1,
        dots : true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            }],
      };
    return (
        <Container style={{ marginTop : '2rem' , color : "black" , textAlign : "center"}}>
            <div style={{ display : "flex" , alignItem : "center" , justifyContent : "space-around"}}>
                <h5 className='title_grid'>Completed</h5>
                <h5 className='title_grid'>Upcoming</h5>
                <h5 className='title_grid'>3D Elevation</h5>
            </div>
            
            <Slider  {...settings}>
                <div className='img_div'>
                    <img src="./images/Mask Group 25.png"  className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 23.png"  className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 26.png"  className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 24.png"  className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 25.png"  className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 23.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 26.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 24.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 25.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 23.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 26.png" className="img_wrap" alt="" />
                </div>
                <div className='img_div'>
                    <img src="./images/Mask Group 24.png" className="img_wrap" alt="" />
                </div>
            </Slider>
        </Container>
    )
}

export default ImageGrid
