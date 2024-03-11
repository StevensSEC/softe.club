/* eslint-disable react/forbid-elements */
import React from "react";
import { Link as InnerLink } from "react-router-dom";
import { ROUTES } from "../../Router";

function isValidRoute(href: string): boolean {
	return ROUTES.map(route => route.path).includes(href);
}

class InvalidRouteError extends Error {}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: string | React.ReactElement[];
}

/**
 * Is naming this component "Link" a bad idea because it conflicts with the react router Link? Yes.
 * If it becomes a problem, change the name.
 */
const Link: React.FC<LinkProps> = ({ href, children, target }) => {
	// FIXME: improve performance by only doing `new URL()` once
	function shouldUseRouter(link: string) {
		if (link.startsWith("mailto")) {
			return false;
		}
		try {
			return link && !new URL(link).host;
		} catch (TypeError) {
			return true;
		}
	}

	function isGithubLink(link: string) {
		try {
			return link && new URL(link).host === "github.com";
		} catch (TypeError) {
			return false;
		}
	}

	// The original link's text, as parsed from markdown
	let originalText = typeof children === "string" ? children : children[0].props.value;

	if (shouldUseRouter(href)) {
		if (!isValidRoute(href)) {
			throw new InvalidRouteError(`The route ${href} does not exist.`);
		}
		return <InnerLink to={href}>{children}</InnerLink>;
	} else if (isGithubLink(href)) {
		let path = new URL(href).pathname.split("/");
		path.shift(); // get rid of the empty string in front.
		let getLinkText = () => {
			if (path.length === 1) {
				// The link is a profile
				return `@${path[0]}`;
			} else if (path.length >= 3 && path[2] === "projects") {
				return children;
			} else {
				// The link is a repo
				let text = `${path[0]}/${path[1]}`;
				if (["issues", "pull"].includes(path[2]) && path.length >= 4) {
					// The link is an issue/PR in the repo
					text += `#${path[3]}`;
				}
				return text;
			}
		};

		if (path.length > 1 && !["explore", "settings", "marketplace", "orgs"].includes(path[0])) {
			let linkText = getLinkText();
			return (
				<a href={href} target={target}>
					{originalText !== href && originalText !== linkText
						? `${originalText} (${linkText})`
						: linkText}
				</a>
			);
		} else {
			return <a href={href} target={target}>{children}</a>;
		}
	} else {
		return <a href={href} target={target}>{children}</a>;
	}
};

export default Link;
