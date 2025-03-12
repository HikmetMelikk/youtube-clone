import { CiMenuKebab } from "react-icons/ci";
import styles from "../../sass/videoCard.module.scss";

function VideoCard({
	id,
	title,
	thumbnailUrl,
	channel,
	views,
	timestamp,
	duration,
}) {
	return (
		<div className={styles.videoCard} key={id}>
			<div className={styles.videoThumbnail}>
				<img src={thumbnailUrl} loading="lazy" alt="video" />
				<span className={styles.videoDuration}>{duration}</span>
			</div>
			<div className={styles.videoInfo}>
				<span className={styles.videoAvatar}>
					<img src={channel.avatar} alt="avatar" />
				</span>
				<div className={styles.videoDetails}>
					<span className={styles.videoTitle}>{title}</span>
					<div className={styles.videoChannelAndViews}>
						<span>{channel.name}</span>
						<span>
							{views} Görüntülenme • {timestamp}
						</span>
					</div>
					<span className={styles.menu}>
						<CiMenuKebab />
					</span>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
