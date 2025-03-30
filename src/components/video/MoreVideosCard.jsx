import { formatPublishDate } from "../../utils/format";
import styles from "./videoView.module.scss";

export default function MoreVideosCard({
	videoId,
	title,
	channelTitle,
	thumbnail,
	publishedAt,
}) {
	return (
		<a href={`/watch?v=${videoId}`} className={styles.moreVideosCard}>
			<div className={styles.thumbnail}>
				<img
					loading="lazy"
					src={thumbnail || "https://placehold.co/168x94/333/aaa"}
					alt={title}
				/>
			</div>
			<div className={styles.videoChannelDetails}>
				<h3 className={styles.videoTitle}>{title}</h3>
				<p className={styles.channelName}>{channelTitle}</p>
				<div className={styles.videoViewDate}>
					<p>Önerilen video</p>
					<p>{formatPublishDate(publishedAt)}</p>
				</div>
			</div>
		</a>
	);
}
