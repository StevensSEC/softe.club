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
        this.state = {currentSlide: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    nextSlide() {
        let isInbounds = (index) => {
            return index > 0 && index <= this.props.children.length - 1;
        }

        let isTypeSlide = (index) => {
            return isInbounds(index) && this.props.children[index].type.name === "Slide";
        }

       let isLastChild = (index) => {
            return index === this.props.children.length - 1;
        }

        if (isLastChild(this.state.currentSlide)){
            return;
        }

        let next = this.state.currentSlide + 1;

        while(!isTypeSlide(next) && !isLastChild(next)){
            next++;
        }

        this.setState({currentSlide: next})
    }


    handleClick() {
        this.nextSlide();
    }

    render() {
        return (
            <div onClick={this.handleClick}>
            {this.props.children[this.state.currentSlide]}
            </div>
        );
    }
}

export {SlideDeck, Slide}
