import React from "react";
import * as SEC from "../SEC/lib.js";
import contrib_2020fall from "../../data/contributions/2020fall.json";

/**
 * Display Open Source Contributions made by club members.
 */
export default function Contributions() {
	// TODO: make dynamic so each semester doesn't have to be manually imported.
	const semesters = [contrib_2020fall];

	let rendered = semesters.map(data => {
		return (
			<div key={data.display}>
				<span>During {data.display}, we had {data.contributors.length} club members make open source contributions.</span>
				<ul>
					{data.contributors.map(username =>
						<li key={username}>
							<SEC.Link href={`https://github.com/${username}`}>
								{username}
							</SEC.Link>
						</li>)}
				</ul>
				<span>Combined, they finished {data.referenced_prs.length} pull requests.</span>
				<ul>
					{data.referenced_prs.map(link =>
						<li key={link}>
							<SEC.Link href={link}>
								{link}
							</SEC.Link>
						</li>)}
				</ul>
			</div>
		);
	});

	return (
		<div>
			<h1>Open Source Contributions</h1>
			<div>
				<SEC.Link href="https://github.com/orgs/StevensSEC/projects/3">Add your contributions to open source here.</SEC.Link>
			</div>
			<hr />
			{rendered}
		</div>
	);
}