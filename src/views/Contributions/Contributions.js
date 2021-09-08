import React from "react";
import contrib_2020fall from "../../data/contributions/2020fall.json";
import * as SEC from "../../components/SEC/lib.js";
import Contributions from "../../components/Contributions/Contributions";
import "./Contributions.scss";

const ContributionsView = () => {
	return (
		<div className="content">
			<h1>Open Source Contributions</h1>
			<div>
				<SEC.Link href="https://github.com/orgs/StevensSEC/projects/3">
					Add your contributions to open source here.
				</SEC.Link>
			</div>
			<hr />
			<Contributions semesters={[contrib_2020fall]} />
		</div>
	);
};

export default ContributionsView;
