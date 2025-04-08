import { useState } from "react";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Router from "./routes/Router";

function App() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

	const toggleSidebar = () => {
		setSidebarCollapsed(!sidebarCollapsed);
	};

	return (
		<>
			<NavBar onMenuClick={toggleSidebar} />
			<div className="app-container">
				<Sidebar collapsed={sidebarCollapsed} />
				<main
					className={`main-content ${
						sidebarCollapsed ? "sidebar-collapsed" : ""
					}`}>
					<Router />
				</main>
			</div>
		</>
	);
}

export default App;
