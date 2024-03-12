import { describe, it, expect, beforeEach, afterEach } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";

import CodeBlock from "./CodeBlock";

let container = null;
describe("CodeBlock appearance", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root?.unmount();
	});

	it("should render without crashing", () => {
		root.render(<CodeBlock value="Test" />, container);
	});

	it.skip("should contain the text content", () => {
		root.render(<CodeBlock value="Test" />, container);
		expect(root.text()).toEqual("Test");
	});

	it.skip("should contain pre and code tags when no language is specified", () => {
		let wrapper = mount(<CodeBlock value="Test" />, container);
		expect(wrapper.find("pre")).toHaveLength(1);
		expect(wrapper.find("code")).toHaveLength(1);
	});

	it.skip("should render text when a language is specified", () => {
		let wrapper = mount(
			<CodeBlock language="javascript" value="function example() { return 'Hello'; }" />,
			container
		);
		expect(wrapper.find("code").text()).toEqual("function example() { return 'Hello'; }");
	});
});
