import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// TODO: custom colors that match the rest of the site's design
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import SecStyle from "../../variables.scss";

export default class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    const preStyle = {
      background: SecStyle.codeBackgroundColor,
      padding: 1 + "em",
      borderRadius: 0.3 + "em",
      overflowX: "auto",
    };

    if (language !== null) {
      return (
        <SyntaxHighlighter
          language={language}
          style={okaidia}
          customStyle={preStyle}>
          {value}
        </SyntaxHighlighter>
      );
    }
    else {
      return (
        <pre style={preStyle}>
          <code>
            {value}
          </code>
        </pre>
      );
    }
  }
}
