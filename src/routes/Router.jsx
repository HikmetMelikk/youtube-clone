import { lazy } from "react";
import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";

const LazySearchResultContent = lazy(() => import("../views/SearchResultView"));
const LazyVideoDetails = lazy(() => import("../components/video/VideoDetails"));

function Router() {
	const routes = useRoutes([
		{
			path: "/",
			element: <HomeView />,
		},
		{
			path: "/results",
			element: <LazySearchResultContent />,
		},
		{
			path: "/watch",
			element: <LazyVideoDetails />,
		},
	]);

	return routes;
}

export default Router;
