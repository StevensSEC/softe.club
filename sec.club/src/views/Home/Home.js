import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { ReactSVG } from 'react-svg';
import "./Home.scss";
import "../../assets/logo-hero.scss";
import logo from "../../assets/logo.svg";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import EventBanner from "../../components/EventBanner/EventBanner.jsx"

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
			<Container className="banners">
				<EventBanner 
					source="LearnHack.png" 
					title="learnHack"
					desc="Equip yourself with the tools and knowledge to contribute this semester's Semester Long Project. Location: BC 122"/>
				<EventBanner
					source="Pair Programming.png"
					title="Pair Programming"
					desc="Come out and learn about the Pair Programming paradigm just in time for Valentine's Day! Pizza will be served. Location: P 120"/>
			</Container>
		</Box>
	)
}