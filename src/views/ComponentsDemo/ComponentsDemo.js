import React from "react";
import { Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import * as SEC from "../../components/SEC/lib.js";

/**
 * This view is intended to be used to test custom components.
 */
export default function ComponentsDemo() {
	return (
		<Container>
			<DocumentTitle title="Custom Component Demo" />
			<h1>SEC.Buttons</h1>
			<SEC.Button kind="primary">Primary</SEC.Button>
			<br />
			<SEC.Button kind="secondary">Secondary</SEC.Button>
			<br />
			<SEC.Button kind="generic">Generic</SEC.Button>
			<br />
			<SEC.Button kind="warning">Warning</SEC.Button>
			<br />
			<SEC.Button kind="error">Error</SEC.Button>
			<br />
			<SEC.Button kind="menu">Menu</SEC.Button>
			<br />
			Icon:{" "}
			<SEC.Button kind="icon">
				<MenuIcon />
			</SEC.Button>
			<br />
			<h1>SEC.Link</h1>
			<SEC.Link href="/dev/docs">Documention Home</SEC.Link>
			<br />
			Special link to github repo:{" "}
			<SEC.Link href="https://github.com/StevensSEC/sec.club">
				https://github.com/StevensSEC/sec.club
			</SEC.Link>
			<br />
			Special link to github issue/PR:{" "}
			<SEC.Link href="https://github.com/StevensSEC/sec.club/issues/194">
				https://github.com/StevensSEC/sec.club/issues/194
			</SEC.Link>
			<br />
		</Container>
	);
}
