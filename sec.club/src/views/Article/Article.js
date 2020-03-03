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

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	isValidNode: node => node.type !== 'script',
});

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
			return (
				<Link to={href}>
					{children}
				</Link>
			);
		} else {
			return (
				<a href={href}>
					{children}
				</a>
			)
		}
	}

	lazyImage(props) {
		// This is a fairly recent browser feature. It'll be ignored on older browsers.
		// https://caniuse.com/#feat=loading-lazy-attr
		// TODO: make a lazy loading image component/mixin?
		// eslint-disable-next-line jsx-a11y/alt-text
		return <img loading="lazy" {...props} />
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