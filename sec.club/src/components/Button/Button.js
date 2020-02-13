import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./Button.scss";

class Button extends Component {
	static propTypes = {
		kind: PropTypes.string.isRequired,
		to: PropTypes.string,
		onClick: PropTypes.func,
	};

	static defaultProps = {
		kind: "generic",
		to: null,
		onClick: null,
	};

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	shouldUseRouter() {
		const { to } = this.props;
		try {
			return to && new URL(to).host == null;
		}
		catch (TypeError) {
			return true;
		}
	}

	handleClick(e) {
		e.preventDefault();
		if (this.props.onClick) {
			this.props.onClick(e);
		}
		else if (this.props.to) {
			if (this.shouldUseRouter()) {
				this.props.history.push(this.props.to);
			}
			else {
				window.location = this.props.to;
			}
		}

	}

	render() {
		const { children, kind, to, className } = this.props;
		return (
			<a href={to ? to : "#"} className={`sec-btn sec-kind-${kind}${className ? " " + className : ""}`} onClick={this.handleClick}>
				{children}
			</a>
		);
	}
}

export default withRouter(Button);
