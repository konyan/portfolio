// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { getData } from "../utils/api";
const Github = () => {
	const canvasRef = useRef();
	const contentRef = useRef();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const username = "konyan";
	const theme = "dracula";

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
		const response = await getData();
		setData(response.data);
	};
	/** @jsxIgnore */
	const draw = async () => {
		if (!canvasRef.current || !data) {
			return;
		}

		const { drawContributions } = await import("github-contributions-canvas");

		drawContributions(canvasRef.current, {
			data,
			username: username,
			themeName: theme,
			footerText: "",
		});
		if (contentRef.current) {
			// @ts-ignore
			contentRef.current?.scrollIntoView({
				behavior: "smooth",
			});
		}
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
