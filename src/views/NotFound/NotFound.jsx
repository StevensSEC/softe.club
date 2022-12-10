import React from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import "./NotFound.scss";
import Logo from "../../components/Logo/Logo.jsx";

export default function NotFoundView() {
	let location = useLocation().pathname;

	return (
		<>
			<DocumentTitle title="Uh oh! (404 Not Found)" />
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				className="grid"
			>
				<Grid item>
					<Logo className="logo" />
				</Grid>
				<Grid item>
					<div className="message">
						There doesn't seem to be a page called &quot;{location}&quot; on our
						website. Sorry about that!
					</div>
				</Grid>
			</Grid>
		</>
	);
}
