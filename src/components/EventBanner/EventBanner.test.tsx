import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import { render, cleanup } from "@testing-library/react";

import EventBanner from "./EventBanner";
import testPoster from "../../assets/profiles/carson.png";

describe("EventBanner appearance", () => {
	afterEach(() => {
		cleanup();
	});

	it("should render without crashing", () => {
		render(<EventBanner title="Title" startDate={dayjs()} />);
	});

	it("should contain the text content", () => {
		let wrapper = render(<EventBanner title="Title" desc="Desc" startDate={dayjs()} />);
		expect(wrapper.getByText("Title")).toBeDefined();
		expect(wrapper.getByText("Desc")).toBeDefined();
	});

	it("should contain the image content", async () => {
		let wrapper = render(
			<EventBanner title="Title" startDate={dayjs()} flyerSource="profiles/carson.png" />
		);
		let image = testPoster;
		const img = wrapper.getByAltText("Flyer for Title event");
		expect(img).toBeDefined();
		// @ts-expect-error this works
		expect(img).toHaveAttribute("src", image);
	});

	it("should use the specified alt text if passed in", () => {
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs()}
				flyerSource="profiles/carson.png"
				altText="Test"
			/>
		);
		const img = wrapper.getByAltText("Test");
		expect(img).toBeDefined();
	});

	it.skip("should have a meeting link if passed in", () => {
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs()}
				flyerSource="profiles/carson.png"
				meetingLink="https://example.com"
			/>
		);
		// @ts-expect-error needs to be ported to react testing library
		expect(wrapper.find("a").prop("href")).toEqual("https://example.com");
	});

	it("should indicate if the event is in progress", () => {
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={dayjs("2020-04-04T03:30:00.000Z")}
			/>
		);
		expect(wrapper.container.querySelector(".in-progress")).toBeDefined();
	});
});

describe("Event auto expire", () => {
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
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeDefined();
	});

	it("should render if the event is in progress", () => {
		let now = dayjs("2020-04-04T03:30:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeDefined();
	});

	it("should not render if the end time has been exceeded", () => {
		let now = dayjs("2020-04-04T05:00:00.000Z");
		let wrapper = render(
			<EventBanner
				title="Title"
				startDate={dayjs("2020-04-04T03:00:00.000Z")}
				endDate={dayjs("2020-04-04T04:00:00.000Z")}
				now={now}
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeNull();
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
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeNull();

		now = dayjs("2020-03-01T16:00:00.000Z");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-03-09T21:00:00.000Z")}
				endDate={dayjs("2020-03-09T22:00:00.000Z")}
				now={now}
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeNull();

		now = dayjs("2020-04-04T21:15:00.000Z").subtract(7, "day");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeDefined();

		now = dayjs("2020-04-04T16:00:00.000Z").subtract(6, "day");
		wrapper = render(
			<EventBanner
				title="GBM"
				isGbm={true}
				startDate={dayjs("2020-04-04T21:00:00.000Z")}
				endDate={dayjs("2020-04-04T22:00:00.000Z")}
				now={now}
			/>
		);
		expect(wrapper.container.querySelector(".club-event")).toBeDefined();
	});
});
