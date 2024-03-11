import { describe, it, expect, beforeEach, afterEach } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import { createRoot } from "react-dom/client";
import {render, cleanup} from '@testing-library/react';

import EventBanner from "./EventBanner";
import testPoster from "../../assets/profiles/carson.png";

let container = null;
describe("EventBanner appearance", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		cleanup();
	});

	it("should render without crashing", () => {
		render(<EventBanner />);
	});

	it("should contain the text content", () => {
		let wrapper = render(<EventBanner title="Title" desc="Desc" />);
		expect(wrapper.getByText("Title")).toBeInTheDocument();
		expect(wrapper.getByText("Desc")).toBeInTheDocument();
	});

	it("should contain the image content", async () => {
		let wrapper = render(<EventBanner flyerSource="profiles/carson.png" />);
		let image = testPoster;
		const img = wrapper.getByAltText("Flyer for event");
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("src", image);
	});

	it("should use the specified alt text if passed in", () => {
		let wrapper = render(<EventBanner flyerSource="profiles/carson.png" altText="Test" />);
		const img = wrapper.getByAltText("Test");
		expect(img).toBeInTheDocument();
	});

	it("should have a meeting link if passed in", () => {
		let wrapper = render(
			<EventBanner flyerSource="profiles/carson.png" meetingLink="https://example.com" />
		);
		expect(wrapper.find("a").prop("href")).toEqual("https://example.com");
	});

	it("should indicate if the event is in progress", () => {
		let now = dayjs("2020-04-04T03:30:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".in-progress")).toBeInTheDocument();
	});
});

describe("Event auto expire", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		cleanup();
	});

	it("should render if the end time has not been exceeded", () => {
		let now = dayjs("2020-04-04T02:00:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).toBeInTheDocument();
	});

	it("should render if the event is in progress", () => {
		let now = dayjs("2020-04-04T03:30:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).toBeInTheDocument();
	});

	it("should not render if the end time has been exceeded", () => {
		let now = dayjs("2020-04-04T05:00:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).not.toBeInTheDocument();
	});

	it("should not render if it's a GBM, and the start time is more than 7 days in the future", () => {
		let now = dayjs("2020-04-02T16:00:00.000Z");
		let wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-09T21:00:00.000Z")}
				endDate={dayjs("2020-04-09T22:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).not.toBeInTheDocument();

		now = dayjs("2020-03-01T16:00:00.000Z");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-03-09T21:00:00.000Z")}
				endDate={dayjs("2020-03-09T22:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).not.toBeInTheDocument();

		now = dayjs("2020-04-04T21:15:00.000Z").subtract(7, "day");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).toBeInTheDocument();

		now = dayjs("2020-04-04T16:00:00.000Z").subtract(6, "day");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>,
		);
		expect(wrapper.container.querySelector(".club-event")).toBeInTheDocument();
	});
});
