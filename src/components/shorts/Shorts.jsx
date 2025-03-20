import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import styles from "./shorts.module.scss";

function Shorts({ id, title, thumbnail, views }) {
	return (
		<div className={styles.shorts} key={id}>
			<div className={styles.thumbnail}>
				<img src={thumbnail} loading="lazy" alt="shorts" />
			</div>
			<div className={styles.info}>
				<h4>{title}</h4>
				<span>{views} Görüntülenme</span>
				<span className={styles.menu}>
					<CiMenuKebab />
				</span>
			</div>
		</div>
	);
}

export default Shorts;

// regex
// folder structure
// video açılacak ve izlenecek
// responsive
// scss dosyaları düzenlenecek
