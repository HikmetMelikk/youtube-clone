// import { useEffect, useState } from "react";
// import YoutubeAPI from "../../client/youtube-api";
import "../dummyContent";
import { videos } from "../dummyContent";
import VideoCard from "./VideoCard";

function Content() {
	// const [searchResult, setSearchResult] = useState();

	// async function getVideos() {
	// 	const videos = await YoutubeAPI.getRandomVideos();
	// 	setSearchResult(videos);
	// }

	// useEffect(() => {
	// 	getVideos();
	// }, []);

	return (
		<section
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
			}}>
			{videos.map((video) => (
				<VideoCard key={video.id} {...video} />
			))}
		</section>
	);
}

export default Content;
