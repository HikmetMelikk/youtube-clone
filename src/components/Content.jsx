import React from "react";
import { videos } from "./dummyContent";
import VideoCard from "./VideoCard";

function Content() {
	return (
		<section
			style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
			{videos.map((video) => (
				<VideoCard key={video.id} {...video} />
			))}
		</section>
	);
}

export default Content;
