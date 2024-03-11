/* eslint-disable no-console */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import React from "react";
import { mount } from "enzyme";

import ErrorBoundaryLoader from "./ErrorBoundaryLoader.js";

let wrapper = null;
describe("ErrorBoundaryLoader tests", () => {
	let consoleErrorSpy;
	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
	});

	afterEach(() => {
		if (wrapper) {
			wrapper.unmount();
		}
		consoleErrorSpy?.mockRestore();
	});

	it("should render without crashing", () => {
		const ChildComponent = () => <div>I plan to be good!</div>;

		wrapper = mount(
			<ErrorBoundaryLoader>
				<ChildComponent />
			</ErrorBoundaryLoader>
		);
		expect(console.error).not.toHaveBeenCalled();
	});

	it("calls console.error when a child component throws an error", () => {
		const ChildComponent = () => {
			throw new Error("I plan to misbehave");
		};

		wrapper = mount(
			<ErrorBoundaryLoader>
				<ChildComponent />
			</ErrorBoundaryLoader>
		);
		const error = expect.any(Error);
		expect(console.error).toHaveBeenCalledWith(error);
	});

	it("renders the error animation when a child component throws an error", () => {
		const ChildComponent = () => {
			throw new Error("I plan to misbehave");
		};

		wrapper = mount(
			<ErrorBoundaryLoader>
				<ChildComponent />
			</ErrorBoundaryLoader>
		);

		const svg = wrapper.find("svg");
		expect(svg).toHaveLength(1);
		expect(svg.props()).toHaveProperty("viewBox", "0 0 200 200");
		expect(svg.hasClass("loader")).toBe(true);

		const path = svg.find("path");
		expect(path).toHaveLength(1);
		expect(path.props()).toHaveProperty(
			"d",
			"M 0,100 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 M 100 150 l 0 10"
		);

		const message = wrapper.find("div.message");
		expect(message).toHaveLength(1);
		expect(message.text()).toEqual("An error has occurred.");
	});
});
