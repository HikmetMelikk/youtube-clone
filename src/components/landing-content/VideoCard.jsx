import PropTypes from "prop-types";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
import {
	formatDuration,
	formatPublishDate,
	formatViewCount,
} from "../../utils/format";
import styles from "./videoCard.module.scss";

function VideoCard({ video }) {
	const navigate = useNavigate();
	const { id, snippet, contentDetails, statistics } = video;

	// Handle click to navigate to video detail page
	const handleVideoClick = (e) => {
		// Prevent navigation if menu is clicked
		if (e.target.closest(`.${styles.menu}`)) {
			e.stopPropagation();
			return;
		}

		navigate(`/watch?v=${id}`);
	};

	return (
		<div className={styles.videoCard} key={id} onClick={handleVideoClick}>
			<div className={styles.videoThumbnail}>
				<img
					src={snippet.thumbnails.maxres?.url || snippet.thumbnails.high.url}
					loading="lazy"
					alt={snippet.title}
				/>
				<span className={styles.videoDuration}>
					{formatDuration(contentDetails.duration)}
				</span>
			</div>
			<div className={styles.videoInfo}>
				<div className={styles.videoAvatar}>
					<img
						src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
						alt={snippet.channelTitle}
						onError={(e) => {
							e.target.src = "https://via.placeholder.com/36";
						}}
					/>
				</div>
				<div className={styles.videoDetails}>
					<span className={styles.videoTitle}>{snippet.title}</span>
					<div className={styles.videoChannelAndViews}>
						<span>{snippet.channelTitle}</span>
						<span>
							{formatViewCount(statistics.viewCount)} görüntülenme •{" "}
							{formatPublishDate(snippet.publishedAt)}
						</span>
					</div>
				</div>
				<div className={styles.menu}>
					<CiMenuKebab size={16} />
				</div>
			</div>
		</div>
	);
}

VideoCard.propTypes = {
	video: PropTypes.shape({
		id: PropTypes.string.isRequired,
		snippet: PropTypes.shape({
			title: PropTypes.string.isRequired,
			channelId: PropTypes.string.isRequired,
			channelTitle: PropTypes.string.isRequired,
			publishedAt: PropTypes.string.isRequired,
			thumbnails: PropTypes.shape({
				high: PropTypes.shape({
					url: PropTypes.string.isRequired,
				}).isRequired,
				maxres: PropTypes.shape({
					url: PropTypes.string,
				}),
			}).isRequired,
		}).isRequired,
		contentDetails: PropTypes.shape({
			duration: PropTypes.string.isRequired,
		}).isRequired,
		statistics: PropTypes.shape({
			viewCount: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

export default VideoCard;
