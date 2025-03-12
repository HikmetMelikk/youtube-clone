import { CiMenuKebab } from "react-icons/ci";
import styles from "../../sass/searchResult.module.scss";

function SearchResult({ img, duration, title, view, channel, description }) {
	return (
		<section className={styles.searchResult}>
			<div className={styles.thumbnail}>
				<img src={img} loading="lazy" alt="img" />
				<span className={styles.duration}>{duration}</span>
			</div>

			<div className={styles.details}>
				<div className={styles.header}>
					<div className={styles.title}>
						<span>{title}</span>
						<CiMenuKebab />
					</div>
					<span className={styles.view}>{view} Görüntülenme • 4 yıl önce</span>
				</div>
				<div className={styles.channel}>
					<img
						loading="lazy"
						src="https://picsum.photos/200/300"
						alt=""
						className={styles.channelAvatar}
					/>
					<p>{channel}</p>
				</div>
				<div className={styles.description}>
					<span>{description}</span>
				</div>
			</div>
		</section>
	);
}

export default SearchResult;
