import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { mount } from 'enzyme'
import "@testing-library/jest-dom"

import EventBanner from "./EventBanner.jsx"

let container = null;
describe("Event container appearance", () => {
    beforeEach(() => {
        container = document.createElement("div")
    })

    afterEach(() => {
        unmountComponentAtNode(container)
    })

    it("should render without crashing", () => {
        render(<EventBanner flyerSource="LearnHack.png"/>, container)
    })

    it("should contain the text content", () => {
        let wrapper = mount(<EventBanner title="Title" desc="Desc" flyerSource="LearnHack.png"/>, container)
        expect(wrapper.find(".title").text()).toEqual("Title");
        expect(wrapper.find(".description").text()).toEqual("Desc");
    })

    it("should contain the image content", () => {
        let wrapper = mount(<EventBanner flyerSource="LearnHack.png"/>)
        let image = require(`../../assets/flyers/LearnHack.png`).default
        expect(wrapper.contains(<img src={image} alt="LearnHack.png"/>)).toEqual(true)
    })
}) 

describe("Event hiding", () => {
    beforeEach(() => {
        container = document.createElement("div")
    })    

    afterEach(() => {
        unmountComponentAtNode(container)
    })

    it("should render if the end date has not been exceeded", () => {
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        let wrapper = mount(<EventBanner flyerSource="LearnHack.png" title="Title" endDate={tomorrow}/>, container)
        expect(wrapper.exists(".flyer")).toEqual(true)
    })

    it("should not render if the end date has been exceeded", () => {
        let yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        let wrapper = mount(<EventBanner flyerSource="LearnHack.png" title="Title" endDate={yesterday}/>, container)
        expect(wrapper.exists(".flyer")).toEqual(false)
    })
})