import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./Button.scss";

export default class Button extends Component {
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
			return to && !to.startsWith("#") && new URL(to).host == null;
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
		const { children, kind, to, className, ...other } = this.props;
		delete other.staticContext;
		let classes = `sec-btn sec-kind-${kind}${className ? " " + className : ""}`;

		if (this.shouldUseRouter()) {
			if (this.props.activeClassName) {
				return (
					<NavLink to={to} className={classes} onClick={this.handleClick} {...other}>
						{children}
					</NavLink>
				);
			}
			else {
				return (
					<Link to={to} className={classes} onClick={this.handleClick} {...other}>
						{children}
					</Link>
				);
			}
		}
		else {
			return (
				<a href={to ? to : null} className={classes} onClick={this.handleClick} {...other}>
					{children}
				</a>
			);
		}

	}
}
