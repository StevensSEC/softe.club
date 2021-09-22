import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./Article.scss";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import Loader from "../../components/Loader/Loader.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import { fetchMarkdown } from "../../modules/fetchMarkdown";

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
		(async () => {
			if (this.props.source !== this.state.result__previousSource) {
				const result = await fetchMarkdown(this.props.source)
				this.setState({__previousSource: result.__previousSource, markdown: result.markdown})
			}
		})()
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
