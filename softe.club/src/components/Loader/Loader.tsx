import React from "react";
import { Grid, Fade } from "@material-ui/core";
// @ts-expect-error temporary
import anime from "animejs";
import Anime from "react-anime";
import "./Loader.scss";

function generateRandomShape(vertecies: number, offsetX = 100, offsetY = 100): string {
	const degToRad = Math.PI / 180;
	let points = [];
	let pieSize = 360 / vertecies;
	for (let i = 0; i < 360; i += pieSize) {
		let r = anime.random(60, 100);
		let angle = anime.random(i, i + pieSize * (vertecies * 0.65));
		let x = r * Math.cos(angle * degToRad) + offsetX;
		let y = r * Math.sin(angle * degToRad) + offsetY;
		points.push(`${x} ${y}`);
	}
	return points.join(" ");
}

const LoaderLogo: React.FC<{ anim: any, initShape: any }> = ({ anim, initShape }) => {
	return (
		<svg viewBox="0 0 200 200" className="loader">
			<Anime {...anim}>
				<polygon
					points={initShape}
					style={{ fill: "transparent", stroke: "#f33", strokeWidth: "1px" }}
				/>
			</Anime>
		</svg>
	);
};

const Loader: React.FC<void> = () => {
	const vertecies = 12;
	const initShape = generateRandomShape(vertecies);
	const loaderAnimation = {
			points: [
				{ value: generateRandomShape(vertecies) },
				{ value: generateRandomShape(vertecies) },
				{ value: generateRandomShape(vertecies) },
				{ value: initShape },
			],
			stroke: ["#3f3", "#b3f", "#ff3", "#f33"],
			easing: "easeInOutQuad",
			loop: true,
			duration: 2000,
			direction: "normal",
		};

	return (
		<div className="overlay">
			<Fade in={true} timeout={300}>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					className="loader-container"
				>
					<Grid item><LoaderLogo anim={loaderAnimation} initShape={initShape} /></Grid>
				</Grid>
			</Fade>
		</div>
	);
};

export default Loader;
