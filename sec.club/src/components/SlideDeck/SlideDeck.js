import React from "react";
import { Container } from "@material-ui/core";

class Slide extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <Container>{this.props.children}</Container>;
    }
}

class SlideDeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentSlide: props.children[0], prevSlide: null, nextSlide: null};
        //assume there are some n Slides as children for now
    }

    render() {
        return this.state.currentSlide;
    }
}

export {SlideDeck, Slide}
