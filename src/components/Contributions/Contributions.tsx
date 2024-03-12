import React from "react";
import * as SEC from "../SEC/lib";

interface ContributionsProps {
	display: string;
	contributors: string[];
	referenced_prs: string[];
}

/**
 * Display Open Source Contributions made by club members.
 */
const Contributions: React.FC<ContributionsProps> = props => {
	return (
		<div>
			<h4>
				During {props.display}, we had {props.contributors.length} club members make open
				source contributions.
			</h4>
			<ul>
				{props.contributors.map((username: string) => (
					<li key={username}>
						<SEC.Link href={`https://github.com/${username}`}>{username}</SEC.Link>
					</li>
				))}
			</ul>
			<h4>Combined, they finished {props.referenced_prs.length} pull requests.</h4>
			<ul>
				{props.referenced_prs.map((link: string) => (
					<li key={link}>
						<SEC.Link href={link}>{link}</SEC.Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contributions;
