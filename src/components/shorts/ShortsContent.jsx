import { shortsDummyData } from "../../utils/dummyShortsContent";
import Shorts from "./Shorts";

function ShortsContent() {
	return (
		<>
			<div
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
				<div style={{ height: "36px", width: "36px" }}>
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							fill: "currentcolor",
						}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							focusable="false"
							aria-hidden="true"
							style={{
								pointerEvents: "none",
								display: "inherit",
								width: "100%",
								height: "100%",
							}}>
							<path
								d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z"
								fill="#f03"></path>
							<path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
						</svg>
					</div>
				</div>
				<span style={{ fontWeight: "700", fontSize: "1.5rem" }}>Shorts</span>
			</div>
			<section
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
				}}>
				{shortsDummyData.map((shorts) => (
					<Shorts key={shorts.id} {...shorts} />
				))}
			</section>
		</>
	);
}

export default ShortsContent;
