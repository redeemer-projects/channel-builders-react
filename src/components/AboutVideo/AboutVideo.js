import React from 'react'
import ReactPlayer from 'react-player'

function AboutVideo() {
    return (
        <div style={{ marginTop : "3rem" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  width="100%" height="50vh" controls={true}/>
        </div>
    )
}

export default AboutVideo
