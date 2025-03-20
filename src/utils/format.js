export default function parseYouTubeDuration(duration) {
	const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

	const hours = match[1] ? parseInt(match[1]) : 0;
	const minutes = match[2] ? parseInt(match[2]) : 0;
	const seconds = match[3] ? parseInt(match[3]) : 0;

	if (hours > 0) {
		return `${hours}:${String(minutes).padStart(2, "0")}:${String(
			seconds
		).padStart(2, "0")}`;
	} else {
		return `${minutes}:${String(seconds).padStart(2, "0")}`;
	}
}
export function formatPublishDate(publishDate) {
	if (!publishDate) return "";

	const published = new Date(publishDate);
	const now = new Date();
	const diffInSeconds = Math.floor((now - published) / 1000);

	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30;
	const year = day * 365;

	if (diffInSeconds < minute) {
		return "Şimdi";
	} else if (diffInSeconds < hour) {
		const minutes = Math.floor(diffInSeconds / minute);
		return `${minutes} dakika önce`;
	} else if (diffInSeconds < day) {
		const hours = Math.floor(diffInSeconds / hour);
		return `${hours} saat önce`;
	} else if (diffInSeconds < week) {
		const days = Math.floor(diffInSeconds / day);
		return `${days} gün önce`;
	} else if (diffInSeconds < month) {
		const weeks = Math.floor(diffInSeconds / week);
		return `${weeks} hafta önce`;
	} else if (diffInSeconds < year) {
		const months = Math.floor(diffInSeconds / month);
		return `${months} ay önce`;
	} else {
		const years = Math.floor(diffInSeconds / year);
		return `${years} yıl önce`;
	}
}
