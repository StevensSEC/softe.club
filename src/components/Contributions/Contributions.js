import React from "react";
import PropTypes from "prop-types";
import * as SEC from "../SEC/lib.js";
import "./Contributions.scss";

/**
 * Display Open Source Contributions made by club members.
 */
export default function Contributions(props) {
	return props.semesters.map(data => {
		return (
			<div key={data.display}>
				<h4>
					During {data.display}, we had {data.contributors.length} club members make open
					source contributions.
				</h4>
				<ul>
					{data.contributors.map(username => (
						<li key={username}>
							<SEC.Link href={`https://github.com/${username}`}>{username}</SEC.Link>
						</li>
					))}
				</ul>
				<h4>Combined, they finished {data.referenced_prs.length} pull requests.</h4>
				<ul>
					{data.referenced_prs.map(link => (
						<li key={link}>
							<SEC.Link href={link}>{link}</SEC.Link>
						</li>
					))}
				</ul>
			</div>
		);
	});
}

Contributions.PropTypes = {
	semesters: PropTypes.array,
};
