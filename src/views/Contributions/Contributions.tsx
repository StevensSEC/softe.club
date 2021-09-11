import React, {useState, useEffect} from "react";
import contrib_2020fall from "../../data/contributions/2020fall.json";
import Contributions from "../../components/Contributions/Contributions";
import { Container } from "@material-ui/core";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown";
import { fnFetchMarkdown } from "../../modules/fetchMarkdown";

const ContributionsView = () : JSX.Element => {
	const [markdown, setMarkdown] = useState("");
    const [__previousSource, setPreviousSource] = useState("");

    useEffect(() => {
        fnFetchMarkdown("contributions.md", __previousSource, setMarkdown, setPreviousSource);
    }, [__previousSource])

	return (
		<Container>
			<h1>Contributions</h1>
			<h2>Open Source Contributions</h2>
			<hr />
			<Contributions semesters={[contrib_2020fall]} />
			<h2>SLP Contributions</h2>
			<hr />
			<SecMarkdown markdown={markdown}/>
		</Container>
	);
	
};

export default ContributionsView;
