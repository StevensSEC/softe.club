import React from "react";
import Markdown from "react-markdown";
import HtmlParser from "react-markdown/plugins/html-parser";
import { Container } from "@material-ui/core";
import "./Article.scss";

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	isValidNode: node => node.type !== 'script',
});

export default function ArticleView({ source }) {
	let markdown = require(`../../articles/${source}`);

	return (
		<Container>
			<article>
				<Markdown
					source={markdown}
					escapeHtml={false}
					astPlugins={[parseHtml]}
				/>
			</article>
		</Container>
	);
}