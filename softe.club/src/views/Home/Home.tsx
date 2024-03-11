import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./Home.scss";
import ArticleList from "../../components/ArticleList/ArticleList";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import EventBanner from "../../components/EventBanner/EventBanner";
import { EVENTS } from "../../Events";
import Logo from "../../components/Logo/Logo";

export const HomeView: React.FC<void> = () => {
	return (
		<div>
			<DocumentTitle title="" />
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				className="hero"
			>
				<Grid item>
					<Logo animate={true} />
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
			</Container>
		</div>
	);
}

export default HomeView;
