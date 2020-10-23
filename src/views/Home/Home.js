import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Home.scss";
import ArticleList from "../../components/ArticleList/ArticleList.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import EventBanner from "../../components/EventBanner/EventBanner.jsx";
import EVENTS from "./Events.js";
import Logo from "../../components/Logo/Logo.jsx";
import * as SEC from "../../components/SEC/lib.js";

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
				<ArticleList></ArticleList>
				<h1>Recorded Workshops</h1>
				<SEC.Button to="https://stevens.zoom.us/rec/share/xz3L4ZF9VjNaK_ClJkDUi_g7yT-IkCj-ZV1Q-M6YSLGzGFWJHUcr8hC-ryz7UKbK.h6GY32tVlS7j11aq">
					Debugging Workshop
				</SEC.Button>
			</Container>
		</div>
	);
}
