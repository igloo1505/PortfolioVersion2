import React, { useState, useEffect, Suspense } from "react";
import { featuredTitleText } from "../UniversalData";
import FeaturedImage from "../assets/FeaturedImage.png";
// import VideoDemo from "./VideoDemo";
import { isMobileOnly } from "react-device-detect";
const VideoDemo = React.lazy(() => import("./VideoDemo"));

const FeaturedSection = () => {
	const [shouldShowVideo, setShouldShowVideo] = useState(true);
	useEffect(() => {
		setShouldShowVideo(!isMobileOnly);
		console.log("isMobileOnly: ", isMobileOnly);
	}, []);

	return (
		<div>
			<section className="featured">
				<div className="left">
					<div className="inner transition2 featuredDescriptionText">
						{featuredTitleText()}
					</div>
				</div>
				{shouldShowVideo ? (
					<Suspense
						fallback={
							<img
								className="right transition2"
								src={FeaturedImage}
								alt="App Screenshot"
							/>
						}
					>
						<VideoDemo />
					</Suspense>
				) : (
					<img
						className="right transition2"
						src={FeaturedImage}
						alt="App Screenshot"
					/>
				)}
			</section>
		</div>
	);
};

export default FeaturedSection;
