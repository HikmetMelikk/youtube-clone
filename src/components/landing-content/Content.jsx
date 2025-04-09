import { useEffect, useState } from "react";
import YoutubeAPI from "../../client/youtube-api";
import ShortsContent from "../shorts/ShortsContent";
import VideoCard from "./VideoCard";
import styles from "./videoCard.module.scss";

function Content() {
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	async function fetchVideos() {
		try {
			setLoading(true);
			const response = await YoutubeAPI.getRandomVideos();

			if (response && response.items && response.items.length > 0) {
				const filteredVideos = response.items.filter((video) => {
					const durationPattern = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
					const matches = video.contentDetails.duration.match(durationPattern);

					if (!matches) return true;

					const hours = matches[1] ? parseInt(matches[1], 10) : 0;
					const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
					const seconds = matches[3] ? parseInt(matches[3], 10) : 0;

					const totalSeconds = hours * 3600 + minutes * 60 + seconds;

					return totalSeconds >= 60;
				});

				setVideos(filteredVideos);
			} else {
				setError("Videolar bulunamadı.");
			}

			setLoading(false);
		} catch (err) {
			setError("Video yüklenirken bir hata oluştu.");
			setLoading(false);
			console.error("Video fetch error:", err);
		}
	}

	useEffect(() => {
		fetchVideos();
	}, []);

	if (loading) {
		return <div className={styles.loading}>Videolar yükleniyor...</div>;
	}

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	const firstVideos = videos.slice(0, 4);
	const remainingVideos = videos.slice(4);

	return (
		<main>
			{/* First 4 videos */}
			<div className={styles.content}>
				{firstVideos.length > 0 &&
					firstVideos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
			</div>

			{/* Shorts section */}
			<ShortsContent />

			{/* Remaining videos */}
			<div className={styles.content}>
				{remainingVideos.length > 0 &&
					remainingVideos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
			</div>

			{videos.length === 0 && (
				<div className={styles.noVideos}>Video bulunamadı.</div>
			)}
		</main>
	);
}

export default Content;
