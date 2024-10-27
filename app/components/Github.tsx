import React, { useEffect, useRef, useState } from "react";
import { getData } from "../utils/api";

const Github = () => {
	const canvasRef = useRef();
	const contentRef = useRef();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const username = "konyan";
	const theme = "Dracula";

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (!data) {
			return;
		}
		draw();
	}, [data]);

	const fetchData = async () => {
		const response = await getData(username);
		console.log("er", response.data);
		setData(response.data);
	};

	const draw = async () => {
		if (!canvasRef.current || !data) {
			setError("Something went wrong... Check back later.");
			return;
		}

		const { drawContributions } = await import("github-contributions-canvas");

		drawContributions(canvasRef.current, {
			data,
			username: username,
			themeName: theme,
			footerText: "",
		});
		contentRef.current.scrollIntoView({
			behavior: "smooth",
		});
	};

	const _renderGraphs = () => {
		return (
			<div
				className="w-full h-full"
				style={{ display: data !== null && !loading ? "block" : "none" }}
			>
				{data !== null && <canvas ref={canvasRef} className="w-full h-full" />}
			</div>
		);
	};

	return (
		<section className="App-content" ref={contentRef}>
			{_renderGraphs()}
		</section>
	);
};

export default Github;
