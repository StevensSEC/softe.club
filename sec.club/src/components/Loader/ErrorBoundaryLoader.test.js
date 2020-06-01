import React from 'react'
import { mount } from 'enzyme'

import Loader from "./Loader.js"
import ErrorBoundaryLoader from "./ErrorBoundaryLoader.js"

let wrapper = null;
describe('ErrorBoundaryLoader tests', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error')
        console.error.mockImplementation(() => {})
    })

	afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        console.error.mockRestore()
	});

    it('should render without crashing', () => {
        const ChildComponent = () => <div>I plan to be good!</div>

        wrapper = mount(
        <ErrorBoundaryLoader>
            <ChildComponent/>
        </ErrorBoundaryLoader>
        )
        expect(console.error).not.toHaveBeenCalled()
    })

    it('calls console.error when a child component throws an error', () => {
        const ChildComponent = () => {throw new Error('I plan to misbehave')}

        wrapper = mount(
            <ErrorBoundaryLoader>
                <ChildComponent/>
            </ErrorBoundaryLoader>
        )
        expect(console.error).toHaveBeenCalledTimes(3)
        const error = expect.any(Error)
        expect(console.error).toHaveBeenCalledWith(error)
    })

    it('renders a loader when a child component throws an error', () => {
        const ChildComponent = () => {throw new Error('I plan to misbehave')}

        wrapper = mount(
            <ErrorBoundaryLoader>
                <ChildComponent/>
            </ErrorBoundaryLoader>
        )
        expect(wrapper.contains(<Loader/>)).toEqual(true)
    })
})