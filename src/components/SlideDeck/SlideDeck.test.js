import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { mount } from "enzyme";
import "@testing-library/jest-dom";

import { SlideDeck, Slide } from "./SlideDeck.js";

describe("SlideDeck", () => {
	describe("UI/UX", () => {
		let container = null;
		beforeAll(() => {
			container = document.createElement("div");
			window.domNode = container;
			document.body.appendChild(container);
		});

		afterEach(() => {
			unmountComponentAtNode(container);
		});

		it("should render only the first slide by default", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>rendered</Slide>
					<Slide>not rendered</Slide>
				</SlideDeck>,
				container
			);
			expect(wrapper.find(".slide").text()).toEqual("rendered");
		});

		it("should navigate to the next slide", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>Slide 0</Slide>
					<Slide>Slide 1</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide = jest.fn();
			wrapper.find(".slide").simulate("click");
			expect(wrapper.instance().nextSlide).toBeCalledTimes(1);

			wrapper.instance().nextSlide.mockClear();
			wrapper.instance().setState({ currentSlide: 0 });
			document.dispatchEvent(
				new KeyboardEvent("keydown", { key: "ArrowRight", keyCode: 39 })
			);
			expect(wrapper.instance().nextSlide).toBeCalledTimes(1);
		});

		it("should navigate to the previous slide", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>Slide 0</Slide>
					<Slide>Slide 1</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().prevSlide = jest.fn();
			wrapper.instance().setState({ currentSlide: 1 });
			wrapper.find(".slide").simulate("contextmenu");
			expect(wrapper.instance().prevSlide).toBeCalledTimes(1);

			wrapper.instance().prevSlide.mockClear();
			wrapper.instance().setState({ currentSlide: 1 });
			document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", keyCode: 37 }));
			expect(wrapper.instance().prevSlide).toBeCalledTimes(1);
		});

		it("should exit fullscreen", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>Slide 0</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().setState({ isFullscreen: true });
			document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", keyCode: 27 }));
			expect(wrapper.instance().state.isFullscreen).toEqual(false);
		});
	});

	describe("Navigation", () => {
		let container = null;
		beforeAll(() => {
			container = document.createElement("div");
			window.domNode = container;
			document.body.appendChild(container);
		});

		afterEach(() => {
			unmountComponentAtNode(container);
		});

		it("should advance to the next slide", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>Slide 0</Slide>
					<Slide>Slide 1</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(1);
			expect(wrapper.find(".slide").text()).toEqual("Slide 1");
		});

		it("should go back to the previous slide", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide>Slide 0</Slide>
					<Slide>Slide 1</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().setState({ currentSlide: 1 });
			wrapper.instance().prevSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(0);
			expect(wrapper.find(".slide").text()).toEqual("Slide 0");
		});
	});

	describe("Sticky slides", () => {
		let container = null;
		beforeAll(() => {
			container = document.createElement("div");
			window.domNode = container;
			document.body.appendChild(container);
		});

		afterEach(() => {
			unmountComponentAtNode(container);
		});

		it("single simple sticky slide", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide sticky>Slide 0</Slide>
					<Slide>Slide 1</Slide>
					<Slide>Slide 2</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(1);
			expect(wrapper.instance().state.stickied.current).toEqual(0);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(2);
			expect(wrapper.instance().state.stickied.current).toEqual(0);
		});

		it("2 sticky slides, one should override the other", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide sticky>Slide 0</Slide>
					<Slide sticky>Slide 1</Slide>
					<Slide>Slide 2</Slide>
					<Slide>Slide 3</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(1);
			expect(wrapper.instance().state.stickied.current).toEqual(0);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(2);
			expect(wrapper.instance().state.stickied.current).toEqual(1);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(3);
			expect(wrapper.instance().state.stickied.current).toEqual(1);
		});

		it("1 sticky slide with stickyUntil", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide sticky stickyUntil={2}>
						Slide 0
					</Slide>
					<Slide>Slide 1</Slide>
					<Slide>Slide 2</Slide>
					<Slide>Slide 3</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(1);
			expect(wrapper.instance().state.stickied.current).toEqual(0);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(2);
			expect(wrapper.instance().state.stickied.current).toEqual(null);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(3);
			expect(wrapper.instance().state.stickied.current).toEqual(null);
		});

		it("1 sticky slide with stickyUntil using names", () => {
			let wrapper = mount(
				<SlideDeck>
					<Slide sticky stickyUntil={"hide-sticky"}>
						Slide 0
					</Slide>
					<Slide>Slide 1</Slide>
					<Slide name="hide-sticky">Slide 2</Slide>
					<Slide>Slide 3</Slide>
				</SlideDeck>,
				container
			);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(1);
			expect(wrapper.instance().state.stickied.current).toEqual(0);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(2);
			expect(wrapper.instance().state.stickied.current).toEqual(null);
			wrapper.instance().nextSlide();
			expect(wrapper.instance().state.currentSlide).toEqual(3);
			expect(wrapper.instance().state.stickied.current).toEqual(null);
		});
	});
});
