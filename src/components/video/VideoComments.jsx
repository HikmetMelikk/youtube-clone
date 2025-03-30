import { useEffect, useState } from "react";
import styles from "./videoView.module.scss";

export default function VideoComments({ commentCount, videoId }) {
	const [comments, setComments] = useState([]);

	// For now we'll just display a placeholder comment
	// In a real implementation, you would fetch comments using YouTube API
	useEffect(() => {
		// This would be where you fetch comments from the API
		// For now, just create a placeholder comment
		if (videoId) {
			setComments([
				{
					id: "1",
					authorDisplayName: "Örnek Kullanıcı",
					authorProfileImageUrl: "https://picsum.photos/200/300",
					textDisplay: "Bu bir örnek yorum içeriğidir.",
					publishedAt: new Date().toISOString(),
				},
			]);
		}
	}, [videoId]);

	// Format comment date
	const formatCommentDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("tr-TR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div className={styles.videoComments}>
			<h3>
				{commentCount ? parseInt(commentCount).toLocaleString() : "0"} Yorum
			</h3>
			<div className={styles.commentInput}>
				<input type="text" placeholder="Yorum yaz..." />
				<button>Gönder</button>
			</div>
			<div className={styles.commentList}>
				{comments.map((comment) => (
					<div key={comment.id} className={styles.comment}>
						<div className={styles.commentAvatar}>
							<img
								loading="lazy"
								src={comment.authorProfileImageUrl}
								alt="avatar"
							/>
						</div>
						<div className={styles.commentContent}>
							<div className={styles.commentHeader}>
								<p>{comment.authorDisplayName}</p>
								<span>{formatCommentDate(comment.publishedAt)}</span>
							</div>
							<div className={styles.commentText}>{comment.textDisplay}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
