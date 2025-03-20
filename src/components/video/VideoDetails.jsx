import { useParams } from "react-router";
import MoreVideosCard from "./MoreVideosCard";
import VideoBottomRow from "./VideoBottomRow";
import VideoComments from "./VideoComments";
import VideoTopRow from "./VideoTopRow";
import styles from "./videoView.module.scss";

function VideoDetails() {
	const { videoId } = useParams();
	// const [searchParams] = useSearchParams();
	// const videoIdFromQuery = searchParams.get("v");

	// const actualVideoId = videoId || videoIdFromQuery;

	// const [video, setVideo] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// 	if (actualVideoId) {
	// 		setLoading(true);
	// 		YoutubeAPI.getVideoDetails(actualVideoId)
	// 			.then((data) => {
	// 				if (data.items && data.items.length > 0) {
	// 					setVideo(data.items[0]);
	// 				} else {
	// 					setError("Video bulunamadı");
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				console.error("Video yüklenirken hata:", err);
	// 				setError("Video yüklenirken bir hata oluştu");
	// 			})
	// 			.finally(() => {
	// 				setLoading(false);
	// 			});
	// 	}
	// }, [actualVideoId]);

	// if (loading) return <div className={styles.loading}>Video yükleniyor...</div>;
	// if (error) return <div className={styles.error}>{error}</div>;
	// if (!video) return <div className={styles.error}>Video bulunamadı</div>;

	// // Gelen API yanıtına göre içeriği oluştur
	// const { snippet, statistics, contentDetails } = video;
	// const formattedDuration = contentDetails?.duration
	// 	? parseYouTubeDuration(contentDetails.duration)
	// 	: "";

	return (
		<>
			<section className={styles.video}>
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/nHnw3pusFXw`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</section>
			<section className={styles.videoViewDetails}>
				<div className={styles.videoDetails}>
					<VideoTopRow />
					<VideoBottomRow />
					<VideoComments />
				</div>
				<div className={styles.moreVideos}>
					<MoreVideosCard />
				</div>
			</section>
		</>
	);
}

export default VideoDetails;
