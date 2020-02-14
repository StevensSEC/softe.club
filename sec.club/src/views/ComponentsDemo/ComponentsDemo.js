import React from "react";
import { Container } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import Button from "../../components/Button/Button.js";

/**
 * This view is intended to be used to test custom components.
 */
export default function ComponentsDemo() {
	return (
		<Container>
			<DocumentTitle title="Custom Component Demo" />
			<h1>Buttons</h1>
			<Button kind="primary">Primary</Button><br/>
			<Button kind="secondary">Secondary</Button><br/>
			<Button kind="generic">Generic</Button><br/>
			<Button kind="warning">Warning</Button><br/>
			<Button kind="error">Error</Button><br/>
			<Button kind="menu">Menu</Button><br/>
			Icon: <Button kind="icon"><MenuIcon /></Button><br/>
		</Container>
	);
}
