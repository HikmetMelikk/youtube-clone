import { useEffect, useState } from "react";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Router from "./routes/Router";

function App() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 576);
		};
		checkIfMobile();

		window.addEventListener("resize", checkIfMobile);

		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	const toggleSidebar = () => {
		if (isMobile) {
			setIsSidebarOpen(!isSidebarOpen);
		} else {
			setSidebarCollapsed(!sidebarCollapsed);
		}
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<>
			<NavBar onMenuClick={toggleSidebar} />
			<div className="app-container">
				<Sidebar
					collapsed={sidebarCollapsed}
					isOpen={isSidebarOpen}
					onOverlayClick={closeSidebar}
				/>
				<main
					className={`main-content ${
						sidebarCollapsed ? "sidebar-collapsed" : ""
					} ${isSidebarOpen ? "sidebar-open" : ""}`}>
					<Router />
				</main>
			</div>
		</>
	);
}

export default App;
