import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// TODO: custom colors that match the rest of the site's design
import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";
import "./CodeBlock.scss";

interface CodeBlockProps extends CodeBlockMeta {
	children: string;
}

interface CodeBlockContainerProps {
	meta?: CodeBlockMeta;
	children: any;
}

interface CodeBlockMeta {
	language?: string;
	platform?: string;
}

const CodeBlockContainer: React.FC<CodeBlockContainerProps> = ({ children, meta }) => {
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
};

const CodeBlock: React.FC<CodeBlockProps> = props => {
	let { language, platform, children } = props;
	console.log(props);

	if (language && language.includes(",")) {
		[language, platform] = language.split(",").map(x => x.trim());
	}

	if (language) {
		return (
			<SyntaxHighlighter
				language={language}
				style={okaidia}
				PreTag={CodeBlockContainer}
				meta={{ language, platform }}
			>
				{children}
			</SyntaxHighlighter>
		);
	} else {
		return (
			<CodeBlockContainer>
				<code>{children}</code>
			</CodeBlockContainer>
		);
	}
};

CodeBlock.defaultProps = {
	language: undefined,
	platform: undefined,
};

export default CodeBlock;
