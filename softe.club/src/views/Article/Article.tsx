import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import "./Article.scss";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import Loader from "../../components/Loader/Loader.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import fetchMarkdown from "../../utils/fetchMarkdown";

export interface ArticleViewProps {
	source: string;
	title: string;
}

const ArticleView: React.FC<ArticleViewProps> = props => {
	const [markdown, setMarkdown] = useState<string>();
	const [__previousSource, setPreviousSource] = useState<string>();

	const fetchArticle = () => {
		(async () => {
			if (props.source !== __previousSource) {
				const text = await fetchMarkdown(props.source);
				setPreviousSource(props.source);
				setMarkdown(text);
			}
		})();
	};

	useEffect(() => {
		fetchArticle();
	});

	if (!markdown) {
		return <Loader />;
	}

	return (
		<Container>
			<DocumentTitle title={props.title} />
			<article>
				<SecMarkdown markdown={markdown} />
			</article>
		</Container>
	);
};

export default ArticleView;
