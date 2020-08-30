import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./SlideDeck.scss";

class Slide extends React.Component {
    static propTypes = {
        sticky: PropTypes.bool,
        stickyUntil: PropTypes.number,
    }

    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return <Container className={`slide-content ${this.props.className}`}>{this.props.children}</Container>;
    }
}

class InvalidChildComponentError extends TypeError {}

class SlideDeck extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentSlide: 0,
            stickied: {
                current: null,
                previous: null,
            },
         };

        this.props.children.forEach(child => {
            if(child.type.name !== "Slide"){
                throw new InvalidChildComponentError("All children of SlideDeck must be Slide components.");
            }
        })

        this.handleClick = this.handleClick.bind(this);
        this.handleOnContext = this.handleOnContext.bind(this);
    }

    nextSlide() {
        let next = this.state.currentSlide + 1;
        if (next > this.props.children.length - 1){
            return;
        }
        let newstate = { currentSlide: next };
        if (this.props.children[this.state.currentSlide].props.sticky) {
            newstate.stickied = {
                current: this.state.currentSlide,
                previous: this.state.stickied.current,
            }
        }
        else if (this.state.stickied.current && newstate.currentSlide >= this.props.children[this.state.stickied.current].props.stickyUntil) {
            newstate.stickied = {
                current: null,
                previous: this.state.stickied.current,
            }
        }
        this.setState(newstate);
    }

    prevSlide(){
        let prev = this.state.currentSlide - 1;
        if (prev < 0){
            return;
        }
        let newstate = { currentSlide: prev };
        if (prev === this.state.stickied.current) {
            newstate.stickied = {
                current: this.state.stickied.previous,
                previous: null,
            }
        }
        this.setState(newstate);
    }


    handleClick() {
        this.nextSlide();
    }

    handleOnContext(e){
        e.preventDefault();
        this.prevSlide();
    }

    render() {
        let elements = [];
        if (this.state.stickied.current) {
            elements.push(
                <div className="slide sticky" key="sticky">
                    {this.props.children[this.state.stickied.current]}
                </div>
            );
        }
        elements.push(
            <div className={`slide primary ${this.state.stickied.current ? "sticky-is-present" : ""}`} key="currentSlide">
                {this.props.children[this.state.currentSlide]}
            </div>
        );
        return (
            <div className="slide-deck" onClick={this.handleClick} onContextMenu={this.handleOnContext}>
                {elements}
            </div>
        );
    }
}

export {SlideDeck, Slide}
