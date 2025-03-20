import { useState } from "react";
import styles from "./videoView.module.scss";

export default function VideoBottomRow() {
	const [showFullDescription, setShowFullDescription] = useState(false);

	// Örnek video açıklaması (gerçek API verisini kullanarak değiştirebilirsiniz)
	const videoDescription = `Become a YT Members to get extra perks!
  https://www.youtube.com/channel/UCsrVDPJBYeXItETFHG0qzyw/join
  
  My Products
  🏗️ WDC StarterKit: https://wdcstarterkit.com
  📖 ProjectPlannerAI: https://projectplannerai.com
  🤖 IconGeneratorAI: https://icongeneratorai.com
  
  Useful Links
  💬 Discord: https://discord.gg/4kGbBaa
  🔔 Newsletter: https://newsletter.webdevcody.com/
  📁 GitHub: https://github.com/webdevcody
  📺 Twitch: https://www.twitch.tv/webdevcody
  🤖 Website: https://webdevcody.com
  🐦 Twitter: https://twitter.com/webdevcody`;

	// Açıklama metninin uzunluğunu kontrol etmek için
	const isLongDescription = videoDescription.split("\n").length > 3;

	// Gösterilecek açıklama metni (kısaltılmış veya tam)
	const displayDescription = showFullDescription
		? videoDescription
		: videoDescription.split("\n").slice(0, 3).join("\n");

	// Açıklama durumunu değiştiren fonksiyon
	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div className={styles.videoBottomRow}>
			<div className={styles.videoStats}>
				<div className={styles.videoViews}>Görüntülenme sayısı</div>
				<div className={styles.videoDate}>Yayınlanma tarihi</div>
			</div>

			<div className={styles.videoDescriptionContainer}>
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
