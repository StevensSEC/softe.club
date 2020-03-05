import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom";
import { shallow, mount } from 'enzyme';

import CodeBlock from "./CodeBlock.js";

let container = null;
describe("CodeBlock appearance", () => {
	beforeEach(() => {
		container = document.createElement('div');
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it("should render without crashing", () => {
		render(<CodeBlock value="Test" />, container);
	});

	it("should contain the text content", () => {
		let wrapper = mount(<CodeBlock value="Test" />, container);
		expect(wrapper.text()).toEqual("Test");
	});

	it("should contain pre and code tags when no language is specified", () => {
		let wrapper = mount(<CodeBlock value="Test" />, container);
		expect(wrapper.find("pre")).toHaveLength(1);
		expect(wrapper.find("code")).toHaveLength(1);
	});

	it("should render text when a language is specified", () => {
		let wrapper = mount(<CodeBlock language="javascript" value="function example() { return 'Hello'; }" />, container);
		expect(wrapper.find("code").text()).toEqual("function example() { return 'Hello'; }");
	});
});