export const formatViewCount = (viewCount) => {
	if (!viewCount) return "0";

	const views = parseInt(viewCount, 10);

	if (views >= 1000000000) {
		return (views / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
	}
	if (views >= 1000000) {
		return (views / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
	}
	if (views >= 1000) {
		return (views / 1000).toFixed(1).replace(/\.0$/, "") + "B";
	}
	return views.toString();
};

export const formatPublishDate = (publishDate) => {
	if (!publishDate) return "";

	const published = new Date(publishDate);
	const now = new Date();

	const seconds = Math.floor((now - published) / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return years === 1 ? "1 yıl önce" : `${years} yıl önce`;
	} else if (months > 0) {
		return months === 1 ? "1 ay önce" : `${months} ay önce`;
	} else if (days > 0) {
		return days === 1 ? "1 gün önce" : `${days} gün önce`;
	} else if (hours > 0) {
		return hours === 1 ? "1 saat önce" : `${hours} saat önce`;
	} else if (minutes > 0) {
		return minutes === 1 ? "1 dakika önce" : `${minutes} dakika önce`;
	} else {
		return "Az önce";
	}
};

export const formatDuration = (duration) => {
	if (!duration) return "";

	const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

	if (!match) return "";

	const hours = match[1] ? parseInt(match[1], 10) : 0;
	const minutes = match[2] ? parseInt(match[2], 10) : 0;
	const seconds = match[3] ? parseInt(match[3], 10) : 0;

	if (hours > 0) {
		return `${hours}:${String(minutes).padStart(2, "0")}:${String(
			seconds
		).padStart(2, "0")}`;
	} else {
		return `${minutes}:${String(seconds).padStart(2, "0")}`;
	}
};
