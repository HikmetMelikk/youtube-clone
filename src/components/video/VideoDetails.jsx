import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import YoutubeAPI from "../../client/youtube-api";
import MoreVideosCard from "./MoreVideosCard";
import VideoBottomRow from "./VideoBottomRow";
import VideoComments from "./VideoComments";
import VideoTopRow from "./VideoTopRow";
import styles from "./videoView.module.scss";

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

	const { snippet, statistics } = video;

	return (
		<div className={styles.videoContainer}>
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
		</div>
	);
}

export default VideoDetails;
