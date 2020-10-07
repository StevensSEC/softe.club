import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./Article.scss";
import Markdown from "react-markdown";
import HtmlParser from "react-markdown/plugins/html-parser";
import Loader from "../../components/Loader/Loader.js";
import CodeBlock from "../../components/CodeBlock/CodeBlock.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import { Link } from "react-router-dom";
import ROUTES from "../../Router";

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	isValidNode: node => node.type !== "script",
});

const isValidRoute = href => {
	let paths = ROUTES.map(route => route.path);
	return paths.includes(href);
};

class InvalidRouteError extends Error {}

export default class ArticleView extends PureComponent {
	static propTypes = {
		source: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	};

	constructor(props) {
		super();
		this.state = { markdown: null, __previousSource: null };
	}

	fetchArticle() {
		if (this.props.source === this.state.__previousSource) {
			// don't fetch again if the source hasn't changed
			return;
		}

		let url = require(`../../articles/${this.props.source}`);

		this.setState({
			markdown: null,
		});

		fetch(url)
			.then(resp => {
				return resp.text();
			})
			.then(text => {
				this.setState({
					markdown: text,
					__previousSource: this.props.source,
				});
			});
	}

	componentDidMount() {
		this.fetchArticle();
	}

	componentDidUpdate() {
		this.fetchArticle();
	}

	buildLink({ href, children }) {
		// FIXME: improve performance by only doing `new URL()` once
		function shouldUseRouter(link) {
			try {
				return link && !new URL(link).host;
			} catch (TypeError) {
				return true;
			}
		}

		function isGithubLink(link) {
			try {
				return link && new URL(link).host === "github.com";
			} catch (TypeError) {
				return false;
			}
		}

		// The original link's text, as parsed from markdown
		let originalText = children[0].props.value;

		if (shouldUseRouter(href)) {
			if (!isValidRoute(href)) {
				throw new InvalidRouteError(`The route ${href} does not exist.`);
			}
			return <Link to={href}>{children}</Link>;
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

			if (
				path.length > 1 &&
				!["explore", "settings", "marketplace", "orgs"].includes(path[0])
			) {
				let linkText = getLinkText();
				return (
					<a href={href}>
						{originalText !== href && originalText !== linkText
							? `${originalText} (${linkText})`
							: linkText}
					</a>
				);
			} else {
				return <a href={href}>{children}</a>;
			}
		} else {
			return <a href={href}>{children}</a>;
		}
	}

	lazyImage(props) {
		// This is a fairly recent browser feature. It'll be ignored on older browsers.
		// https://caniuse.com/#feat=loading-lazy-attr
		// TODO: make a lazy loading image component/mixin?
		// eslint-disable-next-line jsx-a11y/alt-text
		return <img loading="lazy" {...props} />;
	}

	render() {
		const { title } = this.props;
		const { markdown } = this.state;

		if (!markdown) {
			return <Loader />;
		}

		return (
			<Container>
				<DocumentTitle title={title} />
				<article>
					<Markdown
						source={markdown}
						escapeHtml={false}
						astPlugins={[parseHtml]}
						renderers={{ code: CodeBlock, link: this.buildLink, image: this.lazyImage }}
						transformImageUri={uri => {
							if (uri.startsWith("http")) {
								return uri;
							}
							let img = require(`../../assets/${uri}`);
							return img.default ? img.default : img;
						}}
					/>
				</article>
			</Container>
		);
	}
}
