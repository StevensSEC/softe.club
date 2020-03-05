import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./Article.scss";
import Markdown from "react-markdown";
import HtmlParser from "react-markdown/plugins/html-parser";
import Loader from "../../components/Loader/Loader.js";
import CodeBlock from "../../components/CodeBlock/CodeBlock.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ROUTES from "../../Router";

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	isValidNode: node => node.type !== 'script',
});

const isValidRoute = (href) => {
	let paths = ROUTES.map(route => route.path);
	return paths.includes(href);
}

class InvalidRouteError extends Error {}

export default class ArticleView extends PureComponent {
	static propTypes = {
		source: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}

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

		fetch(url).then(resp => {
			return resp.text();
		}).then(text => {
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

	buildLink({href, children}) {
		function shouldUseRouter(link) {
			try {
				return link && new URL(link).host == null;
			}
			catch (TypeError) {
				return true;
			}
		}

		if (shouldUseRouter(href)) {
			if(!isValidRoute(href)) {
				throw new InvalidRouteError(`The route ${href} does not exist.`);
			}
			return (
				<Router>
					<Link to={href}>
						{children}
					</Link>
				</Router>
			);
		} else {
			return (
				<a href={href}>
					{children}
				</a>
			)
		}
	}

	render() {
		const { title } = this.props;
		const { markdown } = this.state;

		if (!markdown) {
			return (
				<Loader />
			)
		}

		return (
			<Container>
				<DocumentTitle title={title} />
				<article>
					<Markdown
						source={markdown}
						escapeHtml={false}
						astPlugins={[parseHtml]}
						renderers={{ code: CodeBlock, link: this.buildLink}}
						transformImageUri={uri => require(`../../assets/${uri}`).default}
					/>
				</article>
			</Container>
		);
	}
}