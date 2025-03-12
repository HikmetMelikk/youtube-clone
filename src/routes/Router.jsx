import { lazy } from "react";
import { useRoutes } from "react-router";
import Content from "../components/landing-content/Content";
import ShortsContent from "../components/shorts/ShortsContent";

const LazySearchResultContent = lazy(() =>
	import("../components/search-result/SearchResultContent")
);

function Router() {
	const routes = useRoutes([
		{
			path: "/",
			element: (
				<>
					<Content />
					<ShortsContent />
				</>
			),
		},
		{
			path: "/results",
			element: <LazySearchResultContent />,
		},
	]);

	return routes;
}

export default Router;
