import React from "react";
import { Container } from "@material-ui/core";
import {Slide, SlideDeck} from "../../components/SlideDeck/SlideDeck.js";

class SlideDeckDemo extends React.Component {
    render(){
        return(
        <Container>
            <SlideDeck>
                <Slide>
                    <h1>Slide 1</h1>
                </Slide>
                    <h1>Slide 2</h1>
                <Slide>
                </Slide>
            </SlideDeck>
        </Container>
        )
    }
}

export default SlideDeckDemo;

