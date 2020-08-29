import React from "react";
import { Container } from "@material-ui/core";
import "./SlideDeck.scss";

class Slide extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <Container className="slide">{this.props.children}</Container>;
    }
}

class InvalidChildComponentError extends TypeError {}

class SlideDeck extends React.Component {

    constructor(props){
        super(props);
        this.state = {currentSlide: 0};

        this.props.children.forEach(child => {
            if(child.type.name !== "Slide"){
                throw new InvalidChildComponentError(`All children of SlideDeck must be Slide components.);
            }
        })

        this.handleClick = this.handleClick.bind(this);
        this.handleOnContext = this.handleOnContext.bind(this);
    }

    nextSlide() {
        this.setState({currentSlide: this.state.currentSlide + 1})
    }

    prevSlide(){
        this.setState({currentSlide: this.state.currentSlide - 1})
    }


    handleClick() {
        this.nextSlide();
    }

    handleOnContext(e){
        e.preventDefault();
        this.prevSlide();
    }

    render() {
        return (
            <div onClick={this.handleClick} onContextMenu={this.handleOnContext}>
            {this.props.children[this.state.currentSlide]}
            </div>
        );
    }
}

export {SlideDeck, Slide}
