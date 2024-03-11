/* eslint-disable react/forbid-elements */
import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./Button.scss";

interface ButtonProps {
	kind?: "generic" | "primary" | "secondary" | "warning" | "error" | "menu" | "icon";
	to?: string;
	onClick?: React.MouseEventHandler;
	className?: string;
	activeClassName?: string;
	children: any;
}

const Button: React.FC<ButtonProps> = ({
	kind = "generic",
	to,
	onClick,
	className,
	activeClassName,
	children,
	...other
}) => {
	const history = useHistory();

	const shouldUseRouter = () => {
		try {
			return to && !to.startsWith("#") && !new URL(to).host;
		} catch (TypeError) {
			return true;
		}
	};

	const handleClick: React.MouseEventHandler = e => {
		e.preventDefault();
		if (onClick) {
			onClick(e);
		} else if (to) {
			if (shouldUseRouter()) {
				history.push(to);
			} else {
				window.location.href = to;
			}
		}
	};

	let classes = `sec-btn sec-kind-${kind} ${className ?? ""}`;

	if (shouldUseRouter()) {
		if (activeClassName) {
			return (
				// @ts-expect-error idk
				<NavLink to={to} className={classes} onClick={handleClick} {...other}>
					{children}
				</NavLink>
			);
		} else {
			return (
				// @ts-expect-error idk
				<Link to={to} className={classes} onClick={handleClick} {...other}>
					{children}
				</Link>
			);
		}
	} else {
		return (
			<a href={to} className={classes} onClick={handleClick} {...other}>
				{children}
			</a>
		);
	}
};

Button.defaultProps = {
	kind: "generic",
	to: undefined,
	onClick: undefined,
};

export default Button;
