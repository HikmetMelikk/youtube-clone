import { FiPlus } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import emrethefuckingaka from "../../assets/emrethefuckingaka.png";
import styles from "./navbar.module.scss";

export default function NavbarRight() {
	return (
		<section className={styles.navbarRight}>
			<button className={styles.createContent}>
				<FiPlus className={styles.iconStyles} />
				<span>Oluştur</span>
			</button>

			<button className={styles.navbarIcon}>
				<IoMdNotificationsOutline className={styles.iconStyles} />
			</button>
			<div>
				<img
					src={emrethefuckingaka}
					alt="profile"
					className={styles.navbarIcon}
					style={{ objectFit: "cover" }}
				/>
			</div>
		</section>
	);
}
