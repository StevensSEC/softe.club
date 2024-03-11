import { describe, it, expect, beforeEach, afterEach } from "vitest";
import React from "react";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { createRoot } from "react-dom/client";
import {render, cleanup} from '@testing-library/react';

import Button from "./Button.js";

let container = null;
describe("Button appearance", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root.unmount();
	});

	it("should render without crashing", () => {
		render(<Button>Test</Button>);
	});

	it("should render with valid default classes", () => {
		render(<Button data-testid="btn">Test</Button>);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-btn");
		expect(btn).toHaveClass("sec-kind-generic");
		expect(btn).not.toHaveClass("undefined");
	});

	it("should render the correct kind of button", () => {
		render(
			<Button kind="primary" data-testid="btn">
				Test
			</Button>,
		);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-kind-primary");
	});

	it("should add additional classes when given", () => {
		render(
			<Button className="test" data-testid="btn">
				Test
			</Button>,
		);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveClass("sec-btn");
		expect(btn).toHaveClass("sec-kind-generic");
		expect(btn).toHaveClass("test");
	});

	it("should render children as it's children", () => {
		render(
			<Button className="test" data-testid="btn">
				Test
			</Button>,
		);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveTextContent("Test");
	});
});

describe("Button functionality", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root.unmount();
	});

	it("should render without href by default", () => {
		render(<Button data-testid="btn">Test</Button>, container);
		let btn = getByTestId(container, "btn");
		expect(btn).not.toHaveAttribute("href");
	});

	it("should populate href attribute", () => {
		render(
			<MemoryRouter>
				<Button to="/" data-testid="btn">
					Test
				</Button>
			</MemoryRouter>,
		);
		let btn = getByTestId(container, "btn");
		expect(btn).toHaveAttribute("href", "/");
	});

	it("should use the router to navigate to absolute path", () => {
		let wrapper = render(
			<MemoryRouter>
				<Button to="/" data-testid="btn">
					Test
				</Button>
			</MemoryRouter>,
		);
		let btn = wrapper.find("[data-testid='btn']").at(0).instance();
		expect(btn.shouldUseRouter()).toBe(true);
	});

	it("should use the router to navigate to relative path", () => {
		let wrapper = render(
			<MemoryRouter>
				<Button to="something/relative" data-testid="btn">
					Test
				</Button>
			</MemoryRouter>,
		);
		let btn = wrapper.find("[data-testid='btn']").at(0).instance();
		expect(btn.shouldUseRouter()).toBe(true);
	});

	it("should not use the router to navigate to an external URL", () => {
		let wrapper = render(
			<MemoryRouter>
				<Button to="https://example.com" data-testid="btn">
					Test
				</Button>
			</MemoryRouter>,
		);
		let btn = wrapper.find("[data-testid='btn']").at(0).instance();
		expect(btn.shouldUseRouter()).toBe(false);
	});

	it("should run custom onClick when clicked", () => {
		let click = vi.fn();
		let wrapper = render(
			<MemoryRouter>
				<Button onClick={click} data-testid="btn">
					Test
				</Button>
			</MemoryRouter>,
		);
		let btn = wrapper.find("[data-testid='btn']").at(0);
		btn.simulate("click");
		expect(click).toHaveBeenCalledTimes(1);
	});
});
