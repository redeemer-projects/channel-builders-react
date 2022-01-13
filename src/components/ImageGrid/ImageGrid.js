import React from 'react'
import { Container } from 'react-bootstrap'
import './ImageGrid.css'
import { motion } from 'framer-motion'

function ImageGrid() {
    return (
        <Container style={{ marginTop : '2rem'}}>
            <div className='img_grid'>
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 2.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 3.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 4.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 5.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 3.png" alt="" />
                </motion.div>
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 2.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 2.png" alt="" />
                </motion.div>
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 2.png" alt="" />
                </motion.div>      
                
            </div>
        </Container>
    )
}

export default ImageGrid
