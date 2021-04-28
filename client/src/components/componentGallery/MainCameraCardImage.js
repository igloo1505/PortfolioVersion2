import React, {useEffect, useState} from 'react'
import { animated, useTransition, config } from 'react-spring';
import {CameraCardImageArray as imageArray, cameraImageArrayAsComponents} from './CameraCardImageClass'

const MainCameraCardImage = ({index, isOpen, toggleOpenState}) => {
    // console.log("config", config)
        

    return (
        <div className={isOpen ? "photo-main" : "photo-main__Closed"} onClick={toggleOpenState}>
				<div className={isOpen ? "controls" : "controls__Closed"}>
					<i className="material-icons">Add Share SVG</i>
					<i className="material-icons">Add Fav SVG</i>
				</div>
                <ExtractedSubView index={index} imageArray={imageArray} isOpen={isOpen}/>
			</div>
    )
}

export default MainCameraCardImage


const ExtractedSubView = ({index, isOpen}) => {
    const [internal, setInternal] = useState(0)
    useEffect(() => {
        console.log("Setting state")
        setInternal(index)
    }, [index])
    
    const transition = useTransition(internal, item => item, {
    from: { opacity: 0,},
    enter: { opacity: 1,},
    leave: { opacity: 0,},
    config: config.gentle, 
    delay: 500
    })

    return (
        <div>
    {transition.map(({item, key, props}) => {
        const ImageComponent = cameraImageArrayAsComponents[item]
                return <ImageComponent key={key} style={props} isOpen={isOpen}/>
    }
                )
    }
    </div>
    )
}

