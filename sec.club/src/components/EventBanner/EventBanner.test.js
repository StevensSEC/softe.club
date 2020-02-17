import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { mount } from 'enzyme'
import "@testing-library/jest-dom"

import EventBanner from "./EventBanner.jsx"

let container = null;
describe("EventBanner appearance", () => {
    beforeEach(() => {
        container = document.createElement("div")
    })

    afterEach(() => {
        unmountComponentAtNode(container)
    })

    it("should render without crashing", () => {
        render(<EventBanner flyerSource="Test.jpg"/>, container)
    })

    it("should contain the text content", () => {
        let wrapper = mount(<EventBanner title="Title" desc="Desc" flyerSource="Test.jpg"/>, container)
        expect(wrapper.find(".title").text()).toEqual("Title");
        expect(wrapper.find(".description").text()).toEqual("Desc");
    })

    it("should contain the image content", () => {
        let wrapper = mount(<EventBanner flyerSource="Test.jpg"/>)
        let image = require(`../../assets/flyers/Test.jpg`).default
        expect(wrapper.find("img").prop('src')).toEqual(image)
    })
}) 

describe("Event auto expire", () => {
    beforeEach(() => {
        container = document.createElement("div")
    })    

    afterEach(() => {
        unmountComponentAtNode(container)
    })

    it("should render if the end date has not been exceeded", () => {
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        let wrapper = mount(<EventBanner flyerSource="Test.jpg" title="Title" endDate={tomorrow}/>, container)
        expect(wrapper.exists(".flyer")).toEqual(true)
    })

    it("should not render if the end date has been exceeded", () => {
        let yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        let wrapper = mount(<EventBanner flyerSource="Test.jpg" title="Title" endDate={yesterday}/>, container)
        expect(wrapper.exists(".flyer")).toEqual(false)
    })
})