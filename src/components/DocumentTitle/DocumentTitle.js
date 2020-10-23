import { PureComponent } from "react";
import PropTypes from "prop-types";

export default class DocumentTitle extends PureComponent {
	static propTypes = {
		title: PropTypes.string.isRequired,
	};

	componentDidMount() {
		this.updateTitle();
	}

	componentDidUpdate() {
		this.updateTitle();
	}

	updateTitle() {
		let pageTitle = "";
		if (this.props.title.length > 0) {
			pageTitle += `${this.props.title} - `;
		}
		pageTitle += "Software Engineering Club at Stevens Insitute of Technology";
		// eslint-disable-next-line no-restricted-properties
		document.title = pageTitle;
	}

	render() {
		return null;
	}
}
