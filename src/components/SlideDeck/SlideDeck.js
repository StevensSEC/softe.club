import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import "./SlideDeck.scss";
import { UxContext } from "../../contexts.js";

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
    static contextType = UxContext;

    constructor(props){
        super(props);
        this.state = {
            currentSlide: 0,
            stickied: {
                current: null,
                previous: [],
            },
         };

        this.props.children.forEach(child => {
            if(child.type.name !== "Slide" && process.env.NODE_ENV !== "production"){
                throw new InvalidChildComponentError(`All children of SlideDeck must be Slide components. Got "${child.type.name}" instead`);
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
            let previousStickies = this.state.stickied.previous;
            if (this.state.stickied.current) {
                previousStickies.push(this.state.stickied.current);
            }
            newstate.stickied = {
                current: this.state.currentSlide,
                previous: previousStickies,
            }
        }
        else if (this.state.stickied.current && newstate.currentSlide >= this.props.children[this.state.stickied.current].props.stickyUntil) {
            let previousStickies = this.state.stickied.previous;
            previousStickies.push(this.state.stickied.current);
            newstate.stickied = {
                current: null,
                previous: previousStickies,
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
            let previousStickies = this.state.stickied.previous;
            newstate.stickied = {
                current: previousStickies.length > 0 ? previousStickies.pop() : null,
                previous: previousStickies,
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
        this.context.headerCompact = true;
        this.context.footerVisible = false;
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
