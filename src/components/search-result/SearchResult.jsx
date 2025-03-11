import { CiMenuKebab } from "react-icons/ci";
import styles from "../../sass/searchResult.module.scss";

function SearchResult() {
	return (
		<section className={styles.searchResult}>
			<div className={styles.thumbnail}>
				<img src="https://picsum.photos/200/300" alt="img" />
				<span className={styles.duration}>süre</span>
			</div>

			<div className={styles.details}>
				<div className={styles.header}>
					<div className={styles.title}>
						<span>Video Başlığı</span>
						<CiMenuKebab />
					</div>
					<span className={styles.view}>1.1M Görüntülenme • 4 yıl önce</span>
				</div>
				<div className={styles.channel}>
					<img
						src="https://picsum.photos/200/300"
						alt=""
						className={styles.channelAvatar}
					/>
					<p>Kanal Adı</p>
				</div>
				<div className={styles.description}>
					<span>Videonun açıklamasının olduğu kısım</span>
				</div>
			</div>
		</section>
	);
}

export default SearchResult;
