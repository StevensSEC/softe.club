import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";
import SecMarkdown from "./SecMarkdown.js";

let container = null;
describe("ArticleView", () => {
	beforeEach(() => {
		container = document.createElement("div");
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it("should render a default button instead of a link", async () => {
		const markdown = `[!btn:LINK TEXT](https://softe.club)`;

		await act(async () => {
			render(<SecMarkdown markdown={markdown} />, container);
		});

		expect(container).toHaveTextContent("LINK TEXT");
		expect(container.querySelector(".sec-btn")).not.toBeNull();
		expect(container.querySelector(".sec-kind-generic")).not.toBeNull();
	});

	it("should render a primary button instead of a link", async () => {
		const markdown = `[!btn,primary:LINK TEXT](https://softe.club)`;

		await act(async () => {
			render(<SecMarkdown markdown={markdown} />, container);
		});

		expect(container).toHaveTextContent("LINK TEXT");
		expect(container.querySelector(".sec-btn")).not.toBeNull();
		expect(container.querySelector(".sec-kind-primary")).not.toBeNull();
	});
});
