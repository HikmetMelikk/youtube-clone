import React from "react";
import SearchResult from "./SearchResult";

function SearchResultContent() {
	return (
		<section
			style={{
				display: "flex",
				width: "100%",
				maxWidth: "1200px",
				margin: "0 auto",
				padding: "20px",
				flexDirection: "column",
				gap: "20px",
			}}>
			{[...Array(10)].map((_, index) => (
				<SearchResult key={index} />
			))}
		</section>
	);
}

export default SearchResultContent;
