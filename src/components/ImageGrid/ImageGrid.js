import React from 'react'
import { Container } from 'react-bootstrap'
import './ImageGrid.css'
import { motion } from 'framer-motion'

function ImageGrid() {
    return (
        <Container style={{ marginTop : '2rem'}}>
            <div className='img_grid'>
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 20.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 23.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 2.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 25.png" alt="" />
                </motion.div> 
                <motion.div className='img_wrap' whileHover={{ opacity : 1 }}>
                    <img src="./images/Mask Group 26.png" alt="" />
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
