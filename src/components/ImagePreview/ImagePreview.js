import { faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ImagePreview.css'
function ImagePreview({imgUrl,showModal,setShowModal}) {
    return (
        <>
            {showModal === 'open' && 
                <Container className='image_preview' fluid>
                    <Row>
                        <Col md={12}>
                            <div className='close'>
                                <FontAwesomeIcon icon={faTimesCircle} onClick={()=>setShowModal('close')} size='2x' style={{ cursor: "pointer"}}/>
                            </div>
                        </Col>
                        <Col md={12} sm={12} className='img_block'>
                            <img src={imgUrl}></img> 
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default ImagePreview
