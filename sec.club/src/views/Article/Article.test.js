import React from 'react';
import ReactDOM from 'react-dom';
import ArticleView from './Article.js';

describe('ArticleView', () => {
	it('renders markdown file without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ArticleView source="test/basic.md" title="Basic" />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})
