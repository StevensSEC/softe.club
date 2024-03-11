import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import dayjs from "dayjs";

import EventBanner from "./EventBanner";
import { createRoot } from "react-dom/client";

let container = null;
describe("EventBanner appearance", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root.unmount();
	});

	it("should render without crashing", () => {
		root.render(<EventBanner />, container);
	});

	it("should contain the text content", () => {
		let wrapper = mount(<EventBanner title="Title" desc="Desc" />, container);
		expect(wrapper.find(".title").text()).toEqual("Title");
		expect(wrapper.find(".description").text()).toEqual("Desc");
	});

	it("should contain the image content", () => {
		let wrapper = mount(<EventBanner flyerSource="Test.jpg" />);
		let image = require(`../../assets/flyers/Test.jpg`).default;
		expect(wrapper.find("img").prop("src")).toEqual(image);
		expect(wrapper.find("img").prop("alt")).toEqual("Flyer for event");
	});

	it("should use the specified alt text if passed in", () => {
		let wrapper = mount(<EventBanner flyerSource="Test.jpg" altText="Test" />);
		expect(wrapper.find("img").prop("alt")).toEqual("Test");
	});

	it("should have a meeting link if passed in", () => {
		let wrapper = mount(
			<EventBanner flyerSource="Test.jpg" meetingLink="https://example.com" />
		);
		expect(wrapper.find("a").prop("href")).toEqual("https://example.com");
	});

	it("should indicate if the event is in progress", () => {
		let now = dayjs("2020-04-04T03:30:00.000Z");
		let wrapper = mount(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".in-progress")).toEqual(true);
	});
});

describe("Event auto expire", () => {
	let root;
	beforeEach(() => {
		container = document.createElement("div");
		root = createRoot(container);
	});

	afterEach(() => {
		root.unmount();
	});

	it("should render if the end time has not been exceeded", () => {
		let now = dayjs("2020-04-04T02:00:00.000Z");
		let wrapper = mount(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(true);
	});

	it("should render if the event is in progress", () => {
		let now = dayjs("2020-04-04T03:30:00.000Z");
		let wrapper = mount(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(true);
	});

	it("should not render if the end time has been exceeded", () => {
		let now = dayjs("2020-04-04T05:00:00.000Z");
		let wrapper = mount(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(false);
	});

	it("should not render if it's a GBM, and the start time is more than 7 days in the future", () => {
		let now = dayjs("2020-04-02T16:00:00.000Z");
		let wrapper = mount(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-09T21:00:00.000Z")}
				endDate={dayjs("2020-04-09T22:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(false);

		now = dayjs("2020-03-01T16:00:00.000Z");
		wrapper = mount(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-03-09T21:00:00.000Z")}
				endDate={dayjs("2020-03-09T22:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(false);

		now = dayjs("2020-04-04T21:15:00.000Z").subtract(7, "day");
		wrapper = mount(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(true);

		now = dayjs("2020-04-04T16:00:00.000Z").subtract(6, "day");
		wrapper = mount(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>,
			container
		);
		expect(wrapper.exists(".club-event")).toEqual(true);
	});
});
