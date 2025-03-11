import { useRoutes } from "react-router";
import Content from "../components/landing-content/Content";
import ShortsContent from "../components/shorts/ShortsContent";

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
	]);

	return routes;
}

export default Router;
