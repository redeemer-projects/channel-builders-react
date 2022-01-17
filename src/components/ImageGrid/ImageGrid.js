import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './ImageGrid.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagePreview from '../ImagePreview/ImagePreview';

const images = ["./images/Mask Group 25.png","./images/Mask Group 23.png","./images/Mask Group 26.png","./images/Mask Group 24.png","./images/Mask Group 25.png","./images/Mask Group 23.png","./images/Mask Group 25.png","./images/Mask Group 26.png","./images/Mask Group 24.png"]
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

    const [showModal,setShowModal] =useState('close')
    const [imgUrl,setImgUrl] = useState()
    const handleClick = (img,e) =>{
        if(e.target !== e.currentTarget){
            return;
        }
        switch(showModal){
            case 'open' :
                setShowModal('close');
                break;
            case 'close' :
                setShowModal('open');
                break;
            default:
                setShowModal('close');
                break;
        }
        setImgUrl(img)
    }
    return (
        <Container style={{ marginTop : '2rem' , color : "black" , textAlign : "center"}}>
            <div style={{ display : "flex" , alignItem : "center" , justifyContent : "space-around"}}>
                <h5 className='title_grid'>Completed</h5>
                <h5 className='title_grid'>Upcoming</h5>
                <h5 className='title_grid'>3D Elevation</h5>
            </div>
            
            <Slider  {...settings}>
                
                {
                    images.map((img,index)=>(
                        <div className='img_div'>
                            <img src={img} className="img_wrap" alt="" onClick={(e)=>handleClick(img,e)} index={index}/>
                        </div>
                    ))
                }
            </Slider>
            <ImagePreview imgUrl={imgUrl} showModal={showModal} handleClick={handleClick} setShowModal={setShowModal}/>
        </Container>
    )
}

export default ImageGrid
