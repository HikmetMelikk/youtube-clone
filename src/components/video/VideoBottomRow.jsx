import { useState } from "react";
import styles from "./videoView.module.scss";

export default function VideoBottomRow({
	description,
	viewCount,
	publishedAt,
}) {
	const [showFullDescription, setShowFullDescription] = useState(false);

	// Açıklama metninin uzunluğunu kontrol etmek için
	const isLongDescription = description && description.split("\n").length > 3;

	// Gösterilecek açıklama metni (kısaltılmış veya tam)
	const displayDescription = description || "";

	// Format view count
	const formattedViewCount = viewCount
		? parseInt(viewCount).toLocaleString() + " görüntülenme"
		: "0 görüntülenme";

	// Format publish date
	const formatDate = (dateString) => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("tr-TR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	// Açıklama durumunu değiştiren fonksiyon
	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div className={styles.videoBottomRow}>
			<div className={styles.videoStats}>
				<div className={styles.videoViews}>{formattedViewCount}</div>
				<div className={styles.videoDate}>{formatDate(publishedAt)}</div>
			</div>

			<div
				className={`${styles.videoDescriptionContainer} ${
					showFullDescription ? styles.expanded : ""
				}`}>
				<div className={styles.videoDescription}>{displayDescription}</div>
				{isLongDescription && (
					<button className={styles.showMoreButton} onClick={toggleDescription}>
						{showFullDescription ? "Daha az göster" : "Daha fazla göster"}
					</button>
				)}
			</div>
		</div>
	);
}
