import React from "react";
import { Grid, Fade } from "@material-ui/core";
import anime from 'animejs';
import Anime from 'react-anime';
import "./Loader.scss";

function generateRandomShape(vertecies, offsetX=100, offsetY=100) {
	let points = [];
	let pieSize = 360 / vertecies;
	for (let i = 0; i < 360; i += pieSize) {
		let r = anime.random(60, 100);
		let angle = anime.random(i, i + pieSize);
		let x = r * Math.cos(angle) + offsetX;
		let y = r * Math.sin(angle) + offsetY;
		points.push(`${x} ${y}`);
	}
	return points.join(" ");
}

export default function Loader() {
	const vertecies = 10;
	const initShape = generateRandomShape(vertecies);
	const loaderAnimation = {
		points: [
			{ value: generateRandomShape(vertecies) },
			{ value: generateRandomShape(vertecies) },
			{ value: generateRandomShape(vertecies) },
			{ value: initShape },
		],
		stroke: [
			"#3f3",
			"#b3f",
			"#ff3",
			"#f33",
		],
		easing: 'easeInOutQuad',
		loop: true,
		duration: 2000,
		direction: "normal",
	};

	return (
		<div className="overlay">
			<Fade in={true} timeout={300}>
				<Grid container direction="column" justify="center" alignItems="center" className="loader-container">
					<Grid item>
						<svg viewBox="0 0 200 200" className="loader">
							<Anime {...loaderAnimation}>
								<polygon points={initShape} style={{ fill: "transparent", stroke: "#f33", strokeWidth: "1px" }}/>
							</Anime>
						</svg>
					</Grid>
				</Grid>
			</Fade>
		</div>
	);
}