import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./Article.scss";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import Loader from "../../components/Loader/Loader.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";

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

		fetch(url.default)
			.then(resp => resp.text())
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
					<SecMarkdown markdown={markdown} />
				</article>
			</Container>
		);
	}
}
