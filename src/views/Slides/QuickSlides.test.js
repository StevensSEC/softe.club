import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import fs from "fs";
import yaml from "js-yaml";
import "@testing-library/jest-dom";

import { SlideDeck, Slide } from "../../components/SlideDeck/SlideDeck.js";
import QuickSlides from "./QuickSlides.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";

/**
 * Workaround because requiring yaml file doesn't work in tests.
 */
const testYamlLoader = path => yaml.load(fs.readFileSync(`src/slides/${path}`));

describe("QuickSlides", () => {
	let container = null;
	beforeAll(() => {
		container = document.createElement("div");
		window.domNode = container;
		document.body.appendChild(container);
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	afterEach(() => {
		unmountComponentAtNode(container);
	});

	it("should render a bare minimum quick slides example", async () => {
		let wrapper;
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/minimum.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(SlideDeck).exists()).toEqual(true);
	});

	it("should pass sticky properties along", async () => {
		let wrapper;
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/sticky.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		expect(wrapper.find(SlideDeck).exists()).toEqual(true);
		expect(wrapper.find(Slide).props().sticky).toEqual(true);
		expect(wrapper.find(Slide).props().stickyUntil).toBeUndefined();
		wrapper.find(SlideDeck).instance().nextSlide();
		wrapper.update();
		expect(wrapper.find(Slide).at(1).props().sticky).toEqual(true);
		expect(wrapper.find(Slide).at(1).props().stickyUntil).toEqual(3);
	});

	it("should set the page title when provided", async () => {
		let wrapper;
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/names.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(DocumentTitle).props().title).toEqual("Custom Title");
	});

	it("should render markdown", async () => {
		let wrapper;
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/markdown.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(SlideDeck).exists()).toEqual(true);
		expect(wrapper.exists(".markdown")).toEqual(true);
		expect(wrapper.exists("h1")).toEqual(true);
	});

	it("should assign name props to slides", async () => {
		let wrapper;
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/names.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(SlideDeck).exists()).toEqual(true);
		expect(wrapper.find(Slide).props().name).toEqual("title");
		wrapper.find(SlideDeck).instance().nextSlide();
		wrapper.update();
		expect(wrapper.find(Slide).props().name).toEqual("second");
		wrapper.find(SlideDeck).instance().nextSlide();
		wrapper.update();
		expect(wrapper.find(Slide).props().name).toBeUndefined();
	});
});
