import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Home.scss";
import ArticleList from "../../components/ArticleList/ArticleList.js";
import Contributions from "../../components/Contributions/Contributions.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import EventBanner from "../../components/EventBanner/EventBanner.jsx";
import EVENTS from "../../Events.js";
import Logo from "../../components/Logo/Logo.jsx";

export default function HomeView() {
	return (
		<div>
			<DocumentTitle title="" />
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className="hero"
			>
				<Grid item>
					<Logo animate="true" className="logo" />
				</Grid>
				<Grid item>
					<span>Software Engineering Club</span>
				</Grid>
			</Grid>
			<Container className="banners">
				{EVENTS.map((event, index) => {
					return <EventBanner key={"eventBanner-" + index} {...event} />;
				})}
				<Contributions></Contributions>
				<ArticleList></ArticleList>
			</Container>
		</div>
	);
}
