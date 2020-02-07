import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { ReactSVG } from 'react-svg';
import "./Home.scss";
import "../../assets/logo-hero.scss";
import logo from "../../assets/logo.svg";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import Flyer from "../../components/Flyer/Flyer.jsx"

export default function HomeView() {
	return (
		<Box>
			<DocumentTitle title="" />
			<Grid container direction="column" justify="center" alignItems="center" className="hero">
				<Grid item>
					<ReactSVG
						className="logo"
						src={logo} />
				</Grid>
				<Grid item>
					<span>Software Engineering Club</span>
				</Grid>
			</Grid>
			<Container>
				<Flyer source="GBM_12.3.19.png"></Flyer>
			</Container>
		</Box>
	)
}