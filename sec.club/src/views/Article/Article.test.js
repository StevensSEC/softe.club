import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/dom";
import "@testing-library/jest-dom";

import ArticleView from './Article.js';

let container = null;
describe('ArticleView', () => {
	beforeEach(() => {
		container = document.createElement('div');
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it('renders without crashing', () => {
		render(<ArticleView source="README.md" title="Basic" />, container);
	});

	it('should fetch and render markdown file', async () => {
		const markdown = `
# Basic

This is a test markdown file used in unit tests.
		`;

		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				text: () => Promise.resolve(markdown),
			})
		);

		await act(async () => {
			render(<ArticleView source="test/placeholder.md" title="Basic" />, container);
		});
		expect(global.fetch).toHaveBeenCalled();
		expect(container).toContainHTML('<h1>Basic</h1>');

		global.fetch.mockRestore();
	});

	it('should not render `script` tags in markdown files', async () => {
		const markdown = `
# No Scripts Allowed

This is a test markdown file used in unit tests.

Script tags are not allowed in markdown files. This is done on purpose to
prevent *you* from doing stupid stuff. If you need custom functionality on
a page, you need to make your own view in \`src/views/\`.
		`;

		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				text: () => Promise.resolve(markdown),
			})
		);

		await act(async () => {
			render(<ArticleView source="test/placeholder.md" title="No scripts allowed" />, container);
		});
		expect(container.innerHTML).toContain('<h1>No Scripts Allowed</h1>');
		expect(container.innerHTML).not.toContain('<script>');

		global.fetch.mockRestore();
	});

	it('should render `iframe` tags in markdown files', async () => {
		const markdown = `
# Iframes Allowed

This is a test markdown file used in unit tests.

Iframes are allowed in markdown files. They can be used to embed
youtube videos or codepens.

<iframe data-test-id="test-iframe" width="560" height="315" src="https://www.youtube.com/embed/fBw7a0jRWOE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`;

		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				text: () => Promise.resolve(markdown),
			})
		);

		await act(async () => {
			render(<ArticleView source="README.md" title="Iframes allowed" />, container);
		});
		expect(container).toContainHTML('<h1>Iframes Allowed</h1>');
		expect(container).toContainElement(getByTestId('test-iframe'));

		global.fetch.mockRestore();
	});
})
