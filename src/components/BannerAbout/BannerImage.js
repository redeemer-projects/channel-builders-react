import React from 'react'

function BannerImage(props) {
    return (
        <div>
            <img
                className="d-block w-100"
                src={props.imgUrl}
                alt="First slide"
                />
        </div>
    )
}

export default BannerImage
