import React from "react";
import Markdown from "react-markdown";
// @ts-expect-error temporary fix until react-markdown is updated
import HtmlParser from "react-markdown/plugins/html-parser";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import * as SEC from "../SEC/lib.js";
import "./SecMarkdown.scss";

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	// @ts-expect-error temporary fix until react-markdown is updated
	isValidNode: node => node.type !== "script",
});

const lazyImage: React.FC<React.ImgHTMLAttributes<any>> = props => {
	// This is a fairly recent browser feature. It'll be ignored on older browsers.
	// https://caniuse.com/#feat=loading-lazy-attr
	// TODO: make a lazy loading image component/mixin?
	// eslint-disable-next-line jsx-a11y/alt-text
	return <img loading="lazy" {...props} />;
};

const mdLink: React.FC<{ href: string }> = props => {
	const cmdPrefix = "!";
	let command: string | undefined = undefined;
	let args: string[] = [];
	// @ts-expect-error temp
	let text: string = Array.isArray(props.children) ? props.children[0].props.value : props.children;
	if (text.startsWith(cmdPrefix)) {
		let fullcommand;
		[fullcommand, text] = text.split(":");
		let cmdparsed = fullcommand.slice(cmdPrefix.length).split(",");
		command = cmdparsed[0];
		args = cmdparsed.length > 1 ? cmdparsed.slice(1) : [];
	}

	if (command) {
		if (command === "btn") {
			let kind = "generic";
			if (args.length > 0) {
				kind = args[0];
			}
			return (
				// @ts-expect-error temp
				<SEC.Button kind={kind} href={props.href}>
					{text}
				</SEC.Button>
			);
		} else {
			throw new Error(
				// @ts-expect-error temp
				`Invalid mdLink command: ${command}, original link text: ${props.children[0].props.value}`
			);
		}
	} else {
		return <SEC.Link {...props} />;
	}
};

interface SecMarkdownProps {
	markdown: string;
}

/**
 * Parses and renders markdown with SEC's special flavoring and features.
 */
const SecMarkdown: React.FC<SecMarkdownProps> = ({ markdown }) => {
	if (markdown) {
		return (
			<Markdown
				className="markdown"
				source={markdown}
				escapeHtml={false}
				astPlugins={[parseHtml]}
				renderers={{ code: CodeBlock, link: mdLink, image: lazyImage }}
				transformImageUri={uri => {
					if (uri.startsWith("http")) {
						return uri;
					}
					let img = require(`../../assets/${uri}`);
					return img.default ? img.default : img;
				}}
			/>
		);
	} else {
		return null;
	}
};

export default SecMarkdown;
