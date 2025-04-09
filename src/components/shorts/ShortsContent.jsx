import { useEffect, useState } from "react";
import YoutubeAPI from "../../client/youtube-api";
import Shorts from "./Shorts";
import styles from "./shorts.module.scss";

function ShortsContent() {
	const [shorts, setShorts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const MAX_SHORTS_COUNT = 7;

	useEffect(() => {
		async function fetchShorts() {
			try {
				setLoading(true);
				const response = await YoutubeAPI.getRandomVideos();

				if (response && response.items && response.items.length > 0) {
					const shortsVideos = response.items.filter((video) => {
						const durationPattern = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
						const matches =
							video.contentDetails.duration.match(durationPattern);

						if (!matches) return false;

						const hours = matches[1] ? parseInt(matches[1], 10) : 0;
						const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
						const seconds = matches[3] ? parseInt(matches[3], 10) : 0;

						const totalSeconds = hours * 3600 + minutes * 60 + seconds;

						return totalSeconds < 60;
					});

					setShorts(shortsVideos.slice(0, MAX_SHORTS_COUNT));
				}
				setLoading(false);
			} catch (err) {
				setError("Shorts yüklenirken bir hata oluştu.");
				setLoading(false);
				console.error("Shorts fetch error:", err);
			}
		}

		fetchShorts();
	}, []);

	if (!loading && !error && (!shorts || shorts.length === 0)) {
		return null;
	}

	return (
		<div className={styles.shortsContainer}>
			<div className={styles.shortsHeader}>
				<div className={styles.shortsIcon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						focusable="false"
						aria-hidden="true">
						<path
							d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32,.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
							fill="#f03"></path>
						<path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
					</svg>
				</div>
				<span className={styles.shortsTitle}>Shorts</span>
			</div>

			{loading && <div className={styles.loading}>Shorts yükleniyor...</div>}

			{error && <div className={styles.error}>{error}</div>}

			{!loading && !error && shorts.length > 0 && (
				<section className={styles.shortsGrid}>
					{shorts.map((shortsVideo) => (
						<Shorts
							key={shortsVideo.id}
							id={shortsVideo.id}
							title={shortsVideo.snippet.title}
							thumbnail={shortsVideo.snippet.thumbnails.high.url}
							views={shortsVideo.statistics.viewCount}
						/>
					))}
				</section>
			)}
		</div>
	);
}

export default ShortsContent;
