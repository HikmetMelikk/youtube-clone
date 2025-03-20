import styles from "./videoView.module.scss";

export default function VideoComments() {
	return (
		<div className={styles.videoComments}>
			<div className={styles.commentInput}>
				<input type="text" placeholder="Yorum yaz..." />
				<button>Gönder</button>
			</div>
			<div className={styles.commentList}>
				<div className={styles.comment}>
					<div className={styles.commentAvatar}>
						<img
							loading="lazy"
							src="https://picsum.photos/200/300"
							alt="avatar"
						/>
					</div>
					<div className={styles.commentContent}>
						<div className={styles.commentHeader}>
							<p>Kullanıcı adı</p>
							<span>Yorum tarihi</span>
						</div>
						<div className={styles.commentText}>Yorum metni</div>
					</div>
				</div>
			</div>
		</div>
	);
}
