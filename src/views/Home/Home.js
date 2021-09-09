import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Home.scss";
import ArticleList from "../../components/ArticleList/ArticleList.js";
import Contributions from "../../components/Contributions/Contributions.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import EventBanner from "../../components/EventBanner/EventBanner";
import EVENTS from "../../Events.js";
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
				<h1>Recorded Events</h1>
				<SEC.Button to="https://stevens.zoom.us/rec/share/IJUVzOG3fr8FVdPcAgn47WP75X_pRR16ctlizTbVK6fTW2bUVhoFeJbUCHWkQh69.W3iIJGE1KL8vwO_T?startTime=1612490724000">
					Spring 2021 GBM 1 - Welcome back and pokemonbattlelib introduction
				</SEC.Button>
				<SEC.Button to="https://stevens.zoom.us/rec/share/XgidnIoERiaNyE9C05YraP5G0Z0GEY30MLgjmbuYXzJvhtXLkOnRJr74MVNGyOre.xoHODuzEvwdSG9nk?startTime=1612634446000">
					Spring 2021 learnHack GO
				</SEC.Button>
				<Contributions></Contributions>
				<ArticleList></ArticleList>
				<h1>Recorded Workshops</h1>
				<SEC.Button to="https://stevens.zoom.us/rec/share/xz3L4ZF9VjNaK_ClJkDUi_g7yT-IkCj-ZV1Q-M6YSLGzGFWJHUcr8hC-ryz7UKbK.h6GY32tVlS7j11aq">
					Debugging Workshop
				</SEC.Button>
				<SEC.Button to="https://stevens.zoom.us/rec/share/hADZSxdh28Ib9DvbX0M3qvWW1OBH1lLaeArnEqEs7VqxQjFa_yupJlX1pBQ8DzHA.AcNRY7JWc_jaoBNm">
					Rust Workshop
				</SEC.Button>
			</Container>
		</div>
	);
}
