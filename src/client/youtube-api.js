const BASE_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&chart=mostPopular&locale=tr&regionCode=TR&";

const SEARCH_URL =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25";

const VIDEO_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&";

export default class YoutubeAPI {
	constructor() {}

	static async getRandomVideos() {
		return fetch(`${BASE_URL}key=${import.meta.env.VITE_YOUTUBE_API_KEY}`, {
			method: "GET",
		}).then((response) => response.json());
	}

	static async searchVideos(search) {
		return fetch(
			`${SEARCH_URL}&q=${search}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
			{
				method: "GET",
			}
		).then((response) => response.json());
	}
	static async getVideoDetails(videoId) {
		return fetch(
			`${VIDEO_URL}id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
		).then((response) => response.json());
	}
}
