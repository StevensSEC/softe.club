import React from "react"
import { Grid, Box } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import { ReactSVG } from "react-svg"
import logo from "../../assets/logo.svg"
import "./logo-static.scss"
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle"
import "./NotFound.scss"

export default function NotFoundView() {

	let location = useLocation().pathname;

	return(
		<Box>
			<DocumentTitle title="Uh oh! (404 Not Found)"/>
			<Grid container direction="column" justify="center" alignItems="center" className="grid">
				<Grid item>
					<ReactSVG
						className="logo"
						src={logo} />
				</Grid>
				<Grid item>
					<div className="message">There doesn't seem to be a page called &quot;{location}&quot; on our website. Sorry about that!</div>
				</Grid>
			</Grid>
		</Box>
	); 
}