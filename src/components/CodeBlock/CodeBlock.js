import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// TODO: custom colors that match the rest of the site's design
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import "./CodeBlock.scss";

function CodeBlockContainer({ children, meta }) {
	return (
		<pre className="codeblock">
			{meta ? (
				<div className="meta-container">
					<div className="meta">
						{meta.language ? <span>{meta.language}</span> : null}
						{meta.platform ? <span>{meta.platform}</span> : null}
					</div>
				</div>
			) : null}
			{children}
		</pre>
	);
}

function CodeBlock(props) {
	let { language, platform, value } = props;

	if (language && language.includes(",")) {
		[language, platform] = language.split(",").map(x => x.trim());
	}

	if (language !== null) {
		return (
			<SyntaxHighlighter
				language={language}
				style={okaidia}
				PreTag={CodeBlockContainer}
				meta={{ language: language, platform: platform }}
			>
				{value}
			</SyntaxHighlighter>
		);
	} else {
		return (
			<CodeBlockContainer>
				<code>{value}</code>
			</CodeBlockContainer>
		);
	}
}

CodeBlock.propTypes = {
	value: PropTypes.string,
	language: PropTypes.string,
	platform: PropTypes.string,
};

CodeBlock.defaultProps = {
	language: null,
	platform: null,
};

export default CodeBlock;
