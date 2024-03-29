import React, { useEffect, useState, useRef } from "react";
import demoVideo from "../assets/recipeAppDemo.mp4";
// const demoVideo = React.lazy(() => import("../assets/recipeAppDemo.mp4"));
// import Demo from "../assets/recipeAppDemo.mp4"

// import demoVideo from "../../public/recipeAppDemo.mp4";

const VideoDemo = () => {
	const [shouldPlay, setShouldPlay] = useState(false);
	const videoRef = useRef(null);
	const playVideo = () => {
		videoRef.current.play();
	};
	const pauseVideo = () => {
		videoRef.current.pause();
	};
	useEffect(() => {
		let offset = 0.3;
		let _w = {
			width: window.innerWidth,
			height: window.innerHeight,
		};
		window.addEventListener("scroll", (e) => {
			let video = document.getElementById("recipeAppDemoVideo");
			console.log("e: ", e);
			if (!video) return;
			let _v = video.getBoundingClientRect();
			console.log("video: ", (_w.height - _v.y) / _v.height);
			// video.play();
			if ((_w.height - _v.y) / _v.height > offset) {
				playVideo();
				console.log("Should play");
			}
		});
	}, []);

	return (
		<div
			className="video-demo-container"
			style={{
				// margin: "0 1rem",
				borderRadius: "4px",
				// width: "150%",
				// border: "2px solid black",
			}}
		>
			<video
				id="recipeAppDemoVideo"
				type="video/mp4"
				ref={videoRef}
				loop
				muted
				playsinline
				style={{
					width: "100%",
				}}
			>
				<source src={demoVideo} />
			</video>
		</div>
	);
};

export default VideoDemo;
