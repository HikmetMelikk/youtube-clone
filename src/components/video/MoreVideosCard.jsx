import styles from "./videoView.module.scss";

export default function MoreVideosCard() {
	return (
		<div className={styles.moreVideosCard}>
			<div className={styles.thumbnail}>
				<img loading="lazy" src="https://picsum.photos/200/300" alt="avatar" />
			</div>
			<div className={styles.videoChannelDetails}>
				<h3 className={styles.videoTitle}>Video İsmi</h3>
				<p className={styles.channelName}>Kanal Adı</p>
				<div className={styles.videoViewDate}>
					<p>Görüntülenme sayısı</p>
					<p>Yayınlanma tarihi</p>
				</div>
			</div>
		</div>
	);
}
