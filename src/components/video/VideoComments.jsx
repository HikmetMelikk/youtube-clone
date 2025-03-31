import { useEffect, useState } from "react";
import YoutubeAPI from "../../client/youtube-api";
import styles from "./videoView.module.scss";

export default function VideoComments({ commentCount, videoId }) {
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (videoId) {
			setLoading(true);
			setError(null);

			YoutubeAPI.getVideoComments(videoId)
				.then((data) => {
					if (data.items && data.items.length > 0) {
						// Map API response to our comment format
						const formattedComments = data.items.map((item) => ({
							id: item.id,
							authorDisplayName:
								item.snippet.topLevelComment.snippet.authorDisplayName,
							authorProfileImageUrl:
								item.snippet.topLevelComment.snippet.authorProfileImageUrl,
							textDisplay: item.snippet.topLevelComment.snippet.textDisplay,
							publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
							likeCount: item.snippet.topLevelComment.snippet.likeCount,
						}));
						setComments(formattedComments);
					} else {
						// Fall back to a placeholder if no comments are available
						setComments([
							{
								id: "placeholder",
								authorDisplayName: "Yorum bulunamadı",
								authorProfileImageUrl: "https://picsum.photos/200/300",
								textDisplay: "Bu video için henüz yorum yapılmamış.",
								publishedAt: new Date().toISOString(),
							},
						]);
					}
				})
				.catch((err) => {
					console.error("Comments error:", err);
					setError("Yorumlar yüklenirken bir hata oluştu");
					// Set a placeholder comment on error
					setComments([
						{
							id: "error",
							authorDisplayName: "Hata",
							authorProfileImageUrl: "https://picsum.photos/200/300",
							textDisplay:
								"Yorumlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
							publishedAt: new Date().toISOString(),
						},
					]);
				})
				.finally(() => {
					setLoading(false);
				});
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
			{loading && (
				<div className={styles.commentLoading}>Yorumlar yükleniyor...</div>
			)}
			{error && <div className={styles.commentError}>{error}</div>}
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
							<div
								className={styles.commentText}
								dangerouslySetInnerHTML={{ __html: comment.textDisplay }}></div>
							{comment.likeCount > 0 && (
								<div className={styles.commentLikes}>
									👍 {comment.likeCount}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
