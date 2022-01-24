import React, { useState, useEffect, Suspense } from "react";
import { featuredTitleText } from "../UniversalData";
import placeHolderImage from "../assets/FeaturedImage.jpg";
// import VideoDemo from "./VideoDemo";
const VideoDemo = React.lazy(() => import("./VideoDemo"));

const FeaturedSection = () => {
	const [shouldShowVideo, setShouldShowVideo] = useState(true);

	return (
		<div>
			<section className="featured">
				<div className="left">
					<div className="inner transition2">{featuredTitleText()}</div>
				</div>
				{shouldShowVideo ? (
					<Suspense
						fallback={
							<img
								className="right transition2"
								src={placeHolderImage}
								alt="App Screenshot"
							/>
						}
					>
						<VideoDemo />
					</Suspense>
				) : (
					<img
						className="right transition2"
						src={placeHolderImage}
						alt="App Screenshot"
					/>
				)}
			</section>
		</div>
	);
};

export default FeaturedSection;
