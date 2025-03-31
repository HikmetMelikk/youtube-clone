import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import YoutubeAPI from "../../client/youtube-api";
import SearchResult from "./SearchResultCard";
import styles from "./searchResult.module.scss";

function SearchResultContent() {
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("search_query");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (searchQuery) {
			setLoading(true);
			setError(null);

			YoutubeAPI.searchVideos(searchQuery)
				.then((data) => {
					setResults(data.items || []);
				})
				.catch((err) => {
					console.error("Search error:", err);
					setError("Arama sonuçları yüklenirken bir hata oluştu.");
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [searchQuery]);

	// Generate random view count for demo purposes
	const generateRandomViewCount = () => {
		return Math.floor(Math.random() * 10000000) + 100000;
	};

	return (
		<section className={styles.searchResultContent}>
			{loading && <p>Aranıyor...</p>}
			{error && <p>{error}</p>}
			{!loading && !error && results.length === 0 && searchQuery && (
				<p>&ldquo;{searchQuery}&rdquo; için sonuç bulunamadı.</p>
			)}

			{results.map((item) => (
				<SearchResult
					id={item.id.videoId}
					key={item.id.videoId}
					img={item.snippet?.thumbnails?.high?.url || ""}
					duration={item.contentDetails?.duration || ""}
					title={item.snippet?.title || ""}
					view={item.statistics?.viewCount || generateRandomViewCount()}
					publish={item.snippet?.publishedAt || ""}
					channel={item.snippet?.channelTitle || ""}
					description={item.snippet?.description || ""}
				/>
			))}
		</section>
	);
}

export default SearchResultContent;
