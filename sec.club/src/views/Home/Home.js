import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { ReactSVG } from 'react-svg';
import "./Home.scss";
import "../../assets/logo-hero.scss";
import logo from "../../assets/logo.svg";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import EventBanner from "../../components/EventBanner/EventBanner.jsx"
import EVENTS from "./Events.js"


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
				{EVENTS.map((event, index) => {
					return (
						<EventBanner
						key={"eventBanner-" + index} 
						flyerSource={event.flyerSource}
						title={event.title}
						desc={event.desc}
						endDate={event.endDate}/> 
					)
				})}
			</Container>
		</Box>
	)
}