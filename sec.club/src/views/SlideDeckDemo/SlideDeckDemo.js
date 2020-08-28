import React from "react";
import { Container } from "@material-ui/core";
import {Slide, SlideDeck} from "../../components/SlideDeck/SlideDeck.js";

class SlideDeckDemo extends React.Component {
    render(){
        return(
        <Container>
            <SlideDeck>
                <h1>I dont belong at the beginning</h1>
                <Slide>
                    <h1>Slide 1</h1>
                </Slide>
                <Slide>
                    <h1>Slide 2</h1>
                </Slide>
                <h1>I'm not a slide??!! I guess I'll be skipped...</h1>
                <Slide>
                    <h1>Slide 3 (But Child 5!)</h1>
                </Slide>
            </SlideDeck>
        </Container>
        )
    }
}

export default SlideDeckDemo;

