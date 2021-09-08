import React from "react";
import contrib_2020fall from "../../data/contributions/2020fall.json";
import Contributions from "../../components/Contributions/Contributions";
import { Container } from "@material-ui/core";

const ContributionsView = () => {
	return (
		<Container>
			<h1>Open Source Contributions</h1>
			<hr />
			<Contributions semesters={[contrib_2020fall]} />
		</Container>
	);
};

export default ContributionsView;
