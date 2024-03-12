import React from "react";
import { act } from "react-dom/test-utils";
import fs from "fs";
import yaml from "js-yaml";
import "@testing-library/jest-dom";

import { SlideDeck, Slide } from "../../components/SlideDeck/SlideDeck";
import QuickSlides from "./QuickSlides";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

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
		wrapper?.unmount();
	});

	let wrapper;
	it.skip("should render a bare minimum quick slides example", async () => {
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/minimum.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(SlideDeck).exists()).toEqual(true);
	});

	it.skip("should pass sticky properties along", async () => {
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

	it.skip("should set the page title when provided", async () => {
		await act(async () => {
			wrapper = mount(<QuickSlides slidePath="test/names.yaml" />, container);
		});
		wrapper.setState({
			data: testYamlLoader(wrapper.props().slidePath),
		});
		wrapper.update();
		expect(wrapper.find(DocumentTitle).props().title).toEqual("Custom Title");
	});

	it.skip("should render markdown", async () => {
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

	it.skip("should assign name props to slides", async () => {
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
