import React from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import HtmlParser from "react-markdown/plugins/html-parser";
import CodeBlock from "../../components/CodeBlock/CodeBlock.js";
import * as SEC from "../SEC/lib.js";
import "./SecMarkdown.scss";

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = HtmlParser({
	isValidNode: node => node.type !== "script",
});

const lazyImage = props => {
	// This is a fairly recent browser feature. It'll be ignored on older browsers.
	// https://caniuse.com/#feat=loading-lazy-attr
	// TODO: make a lazy loading image component/mixin?
	// eslint-disable-next-line jsx-a11y/alt-text
	return <img loading="lazy" {...props} />;
};

/**
 * Parses and renders markdown with SEC's special flavoring and features.
 */
const SecMarkdown = ({ markdown }) => {
	if (markdown) {
		return (
			<Markdown
				className="markdown"
				source={markdown}
				escapeHtml={false}
				astPlugins={[parseHtml]}
				renderers={{ code: CodeBlock, link: SEC.Link, image: lazyImage }}
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

SecMarkdown.propTypes = {
	markdown: PropTypes.string,
};

export default SecMarkdown;
