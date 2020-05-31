import React, {Component} from "react";
import { Grid, Fade } from "@material-ui/core";
import anime from 'animejs';
import Anime from 'react-anime';
import "./Loader.scss";

function generateRandomShape(vertecies, offsetX=100, offsetY=100) {
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

export default class Loader extends Component{

	constructor(props){
		super(props)
		this.vertecies = 12;
		this.initShape = generateRandomShape(this.vertecies);
		this.loaderAnimation = {
			points: [
				{ value: generateRandomShape(this.vertecies) },
				{ value: generateRandomShape(this.vertecies) },
				{ value: generateRandomShape(this.vertecies) },
				{ value: this.initShape },
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

		this.state = {hasError: false}
	}

	render(){
		return (
			<div className="overlay">
				<Fade in={true} timeout={300}>
					<Grid container direction="column" justify="center" alignItems="center" className="loader-container">
						<Grid item>
							<svg viewBox="0 0 200 200" className="loader">
								<Anime {...this.loaderAnimation}>
									<polygon points={this.initShape} style={{ fill: "transparent", stroke: "#f33", strokeWidth: "1px" }}/>
								</Anime>
							</svg>
						</Grid>
					</Grid>
				</Fade>
			</div>
		);
	}
}
