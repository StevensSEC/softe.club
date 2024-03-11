import React, { useState, useEffect } from "react";
import contrib_2020fall from "../../data/contributions/2020fall.json";
import Contributions from "../../components/Contributions/Contributions";
import { Container } from "@material-ui/core";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown";
import fetchMarkdown from "../../utils/fetchMarkdown";
import "./Contributions.scss";

const ContributionsView: React.FC<any> = () =>{
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		(async () => {
			const text = await fetchMarkdown("contributions.md");
			setMarkdown(text);
		})();
	});
	let contrib_data = [contrib_2020fall];
	return (
		<Container>
			<h1>Contributions</h1>
			<h2>Open Source Contributions</h2>
			<hr />
			{contrib_data.map((semester, i) => {
				return (
					<Contributions
						key={i}
						display={semester.display}
						contributors={semester.contributors}
						referenced_prs={semester.referenced_prs}
					/>
				);
			})}
			<h2>SLP Contributions</h2>
			<hr />
			<SecMarkdown markdown={markdown} />
		</Container>
	);
};

export default ContributionsView;
