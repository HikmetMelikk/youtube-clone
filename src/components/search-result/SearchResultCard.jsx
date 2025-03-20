import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
import styles from "./searchResult.module.scss";

function SearchResult({
	id,
	img,
	duration,
	title,
	view,
	channel,
	description,
	publish,
}) {
	const navigate = useNavigate();

	const handleVideoClick = () => {
		navigate(`/watch?v=${id}`);
	};

	return (
		<div key={id}>
			<section className={styles.searchResult} onClick={handleVideoClick}>
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
						<span className={styles.view}>
							{view} Görüntülenme • {publish}
						</span>
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
		</div>
	);
}

export default SearchResult;
