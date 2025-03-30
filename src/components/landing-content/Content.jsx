// import { useEffect, useState } from "react";
// import YoutubeAPI from "../../client/youtube-api";
import "../../utils/dummyContent";
import { videos } from "../../utils/dummyContent";
import VideoCard from "./VideoCard";
import styles from "./videoCard.module.scss";

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
		<section className={styles.content}>
			{videos.map((video) => (
				<VideoCard key={video.id} {...video} />
			))}
		</section>
	);
}

export default Content;
