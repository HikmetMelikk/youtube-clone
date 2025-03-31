import PropTypes from "prop-types";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
import { formatViewCount } from "../../utils/format";
import styles from "./shorts.module.scss";

function Shorts({ id, title, thumbnail, views }) {
	const navigate = useNavigate();

	const handleShortsClick = (e) => {
		// Prevent navigation if menu is clicked
		if (e.target.closest(`.${styles.menu}`)) {
			e.stopPropagation();
			return;
		}

		navigate(`/watch?v=${id}`);
	};

	return (
		<div className={styles.shorts} key={id} onClick={handleShortsClick}>
			<div className={styles.thumbnail}>
				<img src={thumbnail} loading="lazy" alt={title} />
			</div>
			<div className={styles.info}>
				<h4>{title}</h4>
				<span>{formatViewCount(views)} görüntülenme</span>
				<span className={styles.menu}>
					<CiMenuKebab />
				</span>
			</div>
		</div>
	);
}

Shorts.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	views: PropTypes.string.isRequired,
};

export default Shorts;

// regex
// folder structure
// video açılacak ve izlenecek
// responsive
// scss dosyaları düzenlenecek
