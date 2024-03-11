import React from "react";

function updateTitle(title: string) {
	let pageTitle = "";
	if (title.length > 0) {
		pageTitle += `${title} - `;
	}
	pageTitle += "Software Engineering Club at Stevens Insitute of Technology";
	// eslint-disable-next-line no-restricted-properties
	document.title = pageTitle;
}

export const DocumentTitle: React.FC<{ title: string }> = props => {
	updateTitle(props.title);
	return null;
};

export default DocumentTitle;
