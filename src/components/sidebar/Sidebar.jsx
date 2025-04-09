import { useEffect, useState } from "react";
import { AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import {
	MdContentCut,
	MdOutlineSubscriptions,
	MdOutlineVideoLibrary,
	MdPlaylistPlay,
	MdWatchLater,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import styles from "./sidebar.module.scss";

const menuItems = [
	{ id: 1, icon: <AiOutlineHome />, label: "Ana Sayfa", path: "/" },
	{ id: 2, icon: <AiOutlineFire />, label: "Keşfet", path: "/" },
	{
		id: 3,
		icon: <MdOutlineSubscriptions />,
		label: "Abonelikler",
		path: "/subscriptions",
	},
];

const youItems = [
	{ id: 1, icon: <GoHistory />, label: "Geçmiş", path: "/history" },
	{
		id: 2,
		icon: <MdPlaylistPlay />,
		label: "Oynatma Listem",
		path: "/playlists",
	},
	{
		id: 3,
		icon: <MdOutlineVideoLibrary />,
		label: "Videolarım",
		path: "/my-videos",
	},
	{
		id: 4,
		icon: <MdWatchLater />,
		label: "Daha Sonra İzle",
		path: "/watch-later",
	},
	{
		id: 5,
		icon: <BiLike />,
		label: "Beğendiğim Videolar",
		path: "/liked-videos",
	},
	{ id: 6, icon: <MdContentCut />, label: "Kliplerim", path: "/clips" },
];

function Sidebar({ collapsed = false, isOpen = false, onOverlayClick }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeItem, setActiveItem] = useState("/");
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 576);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		setActiveItem(location.pathname);
	}, [location]);

	const handleNavigation = (path) => {
		navigate(path);
		if (isMobile) {
			onOverlayClick();
		}
	};

	return (
		<>
			{isMobile && (
				<div
					className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ""}`}
					onClick={onOverlayClick}
				/>
			)}
			<aside
				className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""} ${
					isOpen ? styles.open : ""
				}`}>
				<nav className={styles.sidebarNav}>
					<ul className={styles.sidebarMenu}>
						{menuItems.map((item) => (
							<li
								key={item.id}
								className={`${styles.sidebarMenuItem} ${
									activeItem === item.path ? styles.active : ""
								}`}
								onClick={() => handleNavigation(item.path)}>
								<div className={styles.menuIcon}>{item.icon}</div>
								{/* Always show labels on mobile, regardless of collapsed state */}
								{(isMobile || !collapsed) && (
									<span className={styles.menuLabel}>{item.label}</span>
								)}
							</li>
						))}
					</ul>
					<div className={styles.divider}></div>

					{(isMobile || !collapsed) && (
						<h3 className={styles.sectionTitle}>Siz &gt;</h3>
					)}

					<ul className={styles.sidebarMenu}>
						{youItems.map((item) => (
							<li
								key={item.id}
								className={`${styles.sidebarMenuItem} ${
									activeItem === item.path ? styles.active : ""
								}`}
								onClick={() => handleNavigation(item.path)}>
								<div className={styles.menuIcon}>{item.icon}</div>
								{/* Always show labels on mobile, regardless of collapsed state */}
								{(isMobile || !collapsed) && (
									<span className={styles.menuLabel}>{item.label}</span>
								)}
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</>
	);
}

export default Sidebar;
