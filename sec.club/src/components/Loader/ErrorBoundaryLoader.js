import React from 'react'
import Loader from './Loader.js';

export default class ErrorBoundaryLoader extends Loader {
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
        console.error(error)
    }

    render(){
        if (this.state.hasError){
            return (<Loader/>)
        }
        return this.props.children
    }
}