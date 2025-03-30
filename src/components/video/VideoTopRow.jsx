import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";
import styles from "./videoView.module.scss";

export default function VideoTopRow({
	title,
	channelTitle,
	channelId,
	likeCount,
}) {
	return (
		<>
			<h1 className={styles.videoTitle}>{title}</h1>
			<div className={styles.videoTopRow}>
				<div className={styles.channelInformation}>
					<div className={styles.channelAvatar}>
						<img
							loading="lazy"
							src="https://picsum.photos/200/300"
							alt="avatar"
						/>
					</div>
					<div className={styles.channelName}>
						<p>{channelTitle}</p>
						<span>Abone sayısı</span>
					</div>
					<button>Abone Ol</button>
				</div>

				<div className={styles.videoTopRowButtons}>
					<div className={styles.likeDislikeButtons}>
						<button className={styles.like}>
							<BiLike className={styles.icon} />
							<span className={styles.count}>
								{parseInt(likeCount).toLocaleString()}
							</span>
						</button>
						<span className={styles.divider}></span>
						<button className={styles.dislike}>
							<BiDislike className={styles.icon} />
						</button>
					</div>
					<button className={styles.share}>
						<IoIosShareAlt className={styles.icon} />
						<span>Paylaş</span>
					</button>
					<button className={styles.download}>
						<RiDownload2Line className={styles.icon} />
						<span>İndir</span>
					</button>
				</div>
			</div>
		</>
	);
}
