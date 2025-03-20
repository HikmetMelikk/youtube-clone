import styles from "./videoView.module.scss";

export default function VideoTopRow() {
	return (
		<>
			<h1 className={styles.videoTitle}>Videonun Başlığı Buraya Gelecek</h1>
			<div className={styles.videoTopRow}>
				<div className={styles.channelInformation}>
					<div className={styles.channelAvatar}>
						<img
							loading="lazy"
							src="https://picsum.photos/200/300"
							alt="avatar"
						/>
					</div>
					<div className={styles.channelName}>
						<p>Kanal Adı</p>
						<span>Abone sayısı</span>
					</div>
					<button>Abone Ol</button>
				</div>

				<div className={styles.videoTopRowButtons}>
					<div className={styles.likeDislikeButtons}>
						<button className={styles.like}>like + sayısı</button>
						<span className={styles.divider}></span>
						<button className={styles.dislike}>dislike</button>
					</div>
					<button className={styles.share}>paylaş</button>
					<button className={styles.download}>indir</button>
				</div>
			</div>
		</>
	);
}
