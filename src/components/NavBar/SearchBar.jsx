import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbMicrophoneFilled } from "react-icons/tb";
import { useNavigate } from "react-router";
import styles from "./navbar.module.scss";

export default function SearchBar() {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		if (search.trim()) {
			navigate(`/results?search_query=${search.trim()}`);
		}
	};
	return (
		<section className={styles.navbarCenter}>
			<div className={styles.search}>
				<input
					type="text"
					placeholder="Ara"
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch()}
					value={search}
				/>
				<button className={styles.navbarIcon} onClick={handleSearch}>
					<CiSearch className={styles.iconStyles} id="search" />
				</button>
			</div>
			<button className={`${styles.navbarIcon} ${styles.microphone}`}>
				<TbMicrophoneFilled className={styles.iconStyles} />
			</button>
		</section>
	);
}
