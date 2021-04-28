import React, {useState, useEffect} from 'react'
import MainCameraCardImage from './MainCameraCardImage'
import {CameraCardImageArray as imageArray} from './CameraCardImageClass'
import {gsapCameraCardTransition} from './gsapCameraCardTransition'

const CameraProductCard = () => {
	const [isInitialRender, setIsInitialRender] = useState(true)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [isOpen, setIsOpen] = useState(true)
	
const handlePhotoAlbumClick = (i) => {
	setIsInitialRender(false)
	setCurrentImageIndex(i)
}
	useEffect(() => {
		setCurrentImageIndex(0)
	}, [])

const toggleOpenState = () => {
	gsapCameraCardTransition(!isOpen)
	setIsOpen(!isOpen)
}


    return (
        <div className={isOpen ? "gallerySection cameraProductCardSection" : "gallerySection gallerySection__Closed cameraProductCardSection__Closed"}>
            <div class={isOpen ? "product" : "product__Closed"}>
	<div class={isOpen ? "product__photo" : "product__photo__Closed"}>
		<div class={isOpen ? "photo-container" : "photo-container__Closed"}>
			<MainCameraCardImage index={currentImageIndex} isOpen={isOpen} toggleOpenState={toggleOpenState}/>
			<div class={isOpen ? "photo-album" : "photo-album__Closed"}>
				<ul>
					{
						imageArray.map((c, index) => 
							<li className={index === currentImageIndex ? "imageInAlbum currentImageInAlbum" : "imageInAlbum"} onClick={() => 
								handlePhotoAlbumClick(index)
							}><img src={imageArray[index].image} alt="Camera Gallery"/></li>
						)
					}
				</ul>
			</div>
		</div>
	</div>
	<div class={isOpen ? "product__info" : "product__info__Closed"}>
		<div class={isOpen ? "title" : "title__Closed"}>
			<h1>Delicious Apples</h1>
			<span>COD: 45999</span>
		</div>
		<div class={isOpen ? "price" : "price__Closed"}>
			$<span>7.93</span>
		</div>
		<div class={isOpen ? "variant" : "variant__Closed"}>
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"/></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"/></li>
			</ul>
		</div>
		<div class={isOpen ? "description" : "description__Closed"}>
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<button class={isOpen ? "buy--btn" : "buy--btn__Closed"} onClick={toggleOpenState}>ADD TO CART</button>
	</div>
</div>
        </div>
    )
}

export default CameraProductCard
