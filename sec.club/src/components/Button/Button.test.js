import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Button from "./Button.js";

let container = null;
describe("Button appearance", () => {
	beforeEach(() => {
		container = document.createElement('div');
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it("should render without crashing", () => {
		render(
			<MemoryRouter>
				<Button>Test</Button>
			</MemoryRouter>
		, container);
	});

	it("should render with valid default classes", () => {
		render(
			<MemoryRouter>
				<Button data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-btn");
		expect(btn).toHaveClass("sec-kind-generic");
		expect(btn).not.toHaveClass("undefined");
	});

	it("should render the correct kind of button", () => {
		render(
			<MemoryRouter>
				<Button kind="primary" data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-kind-primary");
	});

	it("should add additional classes when given", () => {
		render(
			<MemoryRouter>
				<Button className="test" data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-btn");
		expect(btn).toHaveClass("sec-kind-generic");
		expect(btn).toHaveClass("test");
	});

	it("should render children as it's children", () => {
		render(
			<MemoryRouter>
				<Button className="test" data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveTextContent("Test");
	})
});

describe("Button functionality", () => {
	beforeEach(() => {
		container = document.createElement('div');
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it("should render with href='#' by default", () => {
		render(
			<MemoryRouter>
				<Button data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveAttribute("href", "#");
	});

	it("should populate href attribute", () => {
		render(
			<MemoryRouter>
				<Button to="/" data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveAttribute("href", "/");
	})

	it("should use the router to navigate to absolute path", () => {
		let rendered = render(
			<MemoryRouter>
				<Button to="/" data-testid="btn">Test</Button>
			</MemoryRouter>
		, container);
		let btn = getByTestId(container, "btn");
		expect(btn.shouldUseRouter()).toBe(true);
	});
});
