import React from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import "./NotFound.scss";
import Logo from "../../components/Logo/Logo.jsx";

export const NotFoundView: React.FC<any> = () => {
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
					<Logo animate />
				</Grid>
				<Grid item>
					<div className="message">
						There doesn&apos;t seem to be a page called &quot;{location}&quot; on our
						website. Sorry about that!
					</div>
				</Grid>
			</Grid>
		</>
	);
}

export default NotFoundView;
