import { Component } from "react";
import { Grid, Fade } from "@material-ui/core";
import anime from "animejs";
import Anime from "react-anime";
import "./Loader.scss";

function generateRandomShape(vertecies: number, offsetX = 100, offsetY = 100) {
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

export interface LoaderProps {}

export default class Loader<P=LoaderProps, S={}> extends Component<P, S> {
	vertecies = 12;
	initShape: string;
	loaderAnimation: anime.AnimeParams;
	loaderLogo: JSX.Element;

	constructor(props: any) {
		super(props);
		this.initShape = generateRandomShape(this.vertecies);
		this.loaderAnimation = {
			points: [
				{ value: generateRandomShape(this.vertecies) },
				{ value: generateRandomShape(this.vertecies) },
				{ value: generateRandomShape(this.vertecies) },
				{ value: this.initShape },
			],
			stroke: ["#3f3", "#b3f", "#ff3", "#f33"],
			easing: "easeInOutQuad",
			loop: true,
			duration: 2000,
			direction: "normal",
		};
		this.loaderLogo = (
			<svg viewBox="0 0 200 200" className="loader">
				{/* @ts-expect-error temp */}
				<Anime {...this.loaderAnimation}>
					<polygon
						points={this.initShape}
						style={{ fill: "transparent", stroke: "#f33", strokeWidth: "1px" }}
					/>
				</Anime>
			</svg>
		);
	}

	render() {
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
						<Grid item>{this.loaderLogo}</Grid>
					</Grid>
				</Fade>
			</div>
		);
	}
}
