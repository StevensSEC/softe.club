import React from "react";
import {Slide, SlideDeck} from "../../components/SlideDeck/SlideDeck.js";

class SlideDeckDemo extends React.Component {
    render(){
        return(
        <div>
            <SlideDeck>
                <Slide>
                    <h1>Slide 1</h1>
                </Slide>
                <Slide>
                    <h1>Slide 2</h1>
                </Slide>
                <Slide sticky stickyUntil={5}>
                    <h1>Sticky Slide</h1>
                    <p>I should remain on the left side after you hit next, until slide 5, where I should no longer be visible.</p>
                </Slide>
                <Slide>
                    <h1>Slide 3</h1>
                </Slide>
                <Slide>
                    <h1>Slide 4</h1>
                </Slide>
                <Slide>
                    <h1>Slide 5</h1>
                </Slide>
                <Slide sticky>
                    <h1>Sticky Slide A</h1>
                    <p>I will be replaced.</p>
                </Slide>
                <Slide sticky>
                    <h1>Sticky Slide B</h1>
                    <p>I should replace A.</p>
                </Slide>
                <Slide>
                    <h1>Slide 6</h1>
                </Slide>
                <Slide>
                    <h1>Slide 7</h1>
                </Slide>
            </SlideDeck>
        </div>
        )
    }
}

export default SlideDeckDemo;

