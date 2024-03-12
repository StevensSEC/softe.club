import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";
import SecMarkdown from "./SecMarkdown";

let container = null;
describe("ArticleView", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root.unmount();
	});

	it.skip("should render a default button instead of a link", async () => {
		const markdown = `[!btn:LINK TEXT](https://softe.club)`;

		await act(async () => {
			root.render(<SecMarkdown markdown={markdown} />, container);
		});

		expect(container).toHaveTextContent("LINK TEXT");
		expect(container.querySelector(".sec-btn")).not.toBeNull();
		expect(container.querySelector(".sec-kind-generic")).not.toBeNull();
	});

	it.skip("should render a primary button instead of a link", async () => {
		const markdown = `[!btn,primary:LINK TEXT](https://softe.club)`;

		await act(async () => {
			root.render(<SecMarkdown markdown={markdown} />, container);
		});

		expect(container).toHaveTextContent("LINK TEXT");
		expect(container.querySelector(".sec-btn")).not.toBeNull();
		expect(container.querySelector(".sec-kind-primary")).not.toBeNull();
	});
});
