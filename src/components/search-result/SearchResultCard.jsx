import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
import { formatPublishDate, formatViewCount } from "../../utils/format";
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
	const [isHovered, setIsHovered] = useState(false);

	const handleVideoClick = () => {
		navigate(`/watch?v=${id}`);
	};

	// Format date for better display
	const formattedDate = formatPublishDate(publish);

	// Format view count with appropriate notation
	const formattedViews = formatViewCount(view);

	return (
		<section
			className={styles.searchResult}
			onClick={handleVideoClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className={styles.thumbnail}>
				<img src={img} loading="lazy" alt={title} />
				<span className={styles.duration}>{duration}</span>
			</div>

			<div className={styles.details}>
				<div className={styles.header}>
					<div className={styles.title}>
						<span>{title}</span>
						<CiMenuKebab style={{ opacity: isHovered ? 1 : 0 }} />
					</div>
					<span className={styles.view}>
						{formattedViews} görüntüleme • {formattedDate}
					</span>
				</div>
				<div className={styles.channel}>
					<img
						loading="lazy"
						src="https://picsum.photos/seed/channel/100/100"
						alt={channel}
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
