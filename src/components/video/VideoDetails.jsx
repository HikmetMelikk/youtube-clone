import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import YoutubeAPI from "../../client/youtube-api";
import MoreVideosCard from "./MoreVideosCard";
import VideoBottomRow from "./VideoBottomRow";
import VideoComments from "./VideoComments";
import VideoTopRow from "./VideoTopRow";
import styles from "./videoView.module.scss";

// Helper function to parse YouTube duration format
const parseYouTubeDuration = (duration) => {
	const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

	const hours = match[1] ? match[1].replace("H", "") : 0;
	const minutes = match[2] ? match[2].replace("M", "") : 0;
	const seconds = match[3] ? match[3].replace("S", "") : 0;

	let result = "";
	if (hours > 0) {
		result += hours + ":";
		result += String(minutes).padStart(2, "0") + ":";
	} else {
		result += minutes + ":";
	}
	result += String(seconds).padStart(2, "0");

	return result;
};

function VideoDetails() {
	const { videoId } = useParams();
	const [searchParams] = useSearchParams();
	const videoIdFromQuery = searchParams.get("v");

	const actualVideoId = videoId || videoIdFromQuery;

	const [video, setVideo] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [relatedVideos, setRelatedVideos] = useState([]);

	useEffect(() => {
		if (actualVideoId) {
			setLoading(true);
			YoutubeAPI.getVideoDetails(actualVideoId)
				.then((data) => {
					if (data.items && data.items.length > 0) {
						setVideo(data.items[0]);
						return YoutubeAPI.searchVideos(data.items[0].snippet.title);
					} else {
						setError("Video bulunamadı");
					}
				})
				.then((relatedData) => {
					if (relatedData && relatedData.items) {
						// Filter out the current video from related videos
						const filteredVideos = relatedData.items.filter(
							(item) => item.id.videoId !== actualVideoId
						);
						setRelatedVideos(filteredVideos);
					}
				})
				.catch((err) => {
					console.error("Video yüklenirken hata:", err);
					setError("Video yüklenirken bir hata oluştu");
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [actualVideoId]);

	if (loading) return <div className={styles.loading}>Video yükleniyor...</div>;
	if (error) return <div className={styles.error}>{error}</div>;
	if (!video) return <div className={styles.error}>Video bulunamadı</div>;

	// Gelen API yanıtına göre içeriği oluştur
	const { snippet, statistics } = video;

	return (
		<>
			<section className={styles.video}>
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${actualVideoId}`}
					title={snippet.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</section>
			<section className={styles.videoViewDetails}>
				<div className={styles.videoDetails}>
					<VideoTopRow
						title={snippet.title}
						channelTitle={snippet.channelTitle}
						channelId={snippet.channelId}
						likeCount={statistics.likeCount}
					/>
					<VideoBottomRow
						description={snippet.description}
						viewCount={statistics.viewCount}
						publishedAt={snippet.publishedAt}
					/>
					<VideoComments
						commentCount={statistics.commentCount}
						videoId={actualVideoId}
					/>
				</div>
				<div className={styles.moreVideos}>
					{relatedVideos.map((video) => (
						<MoreVideosCard
							key={video.id.videoId || video.id}
							videoId={video.id.videoId || video.id}
							title={video.snippet.title}
							channelTitle={video.snippet.channelTitle}
							thumbnail={video.snippet.thumbnails.medium.url}
							publishedAt={video.snippet.publishedAt}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default VideoDetails;
