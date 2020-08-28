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

class SlideDeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentSlide: -1};

        //find the first slide child element if elem 0 is not a Slide
        if(!this.isTypeSlide(this.state.currentSlide)){
            this.state = {currentSlide: this.findNextSlide()}
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleOnContext = this.handleOnContext.bind(this);
    }

    isInbounds = (index) => {
        return index >= 0 && index <= this.props.children.length - 1;
    }

    isTypeSlide = (index) => {
        return this.isInbounds(index) && this.props.children[index].type.name === "Slide";
    }

    isFirstChild = (index) => {
        return index === 0;
    }

    isLastChild = (index) => {
        return index === this.props.children.length - 1;
    }

    findNextSlide = () => {
        let next = this.state.currentSlide + 1;

        while(!this.isTypeSlide(next) && !this.isLastChild(next)){
            next++;
        }
        return next;
    }

    nextSlide() {
        if (this.isLastChild(this.state.currentSlide)){
            return;
        }
        let next = this.findNextSlide();
        this.setState({currentSlide: next})
    }

    prevSlide(){
        if (this.isFirstChild(this.state.currentSlide)){
            return;
        }

        let prev = this.state.currentSlide - 1;

        while(!this.isTypeSlide(prev) && !this.isFirstChild(prev)){
            prev--;
        }

        this.setState({currentSlide: prev})
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
