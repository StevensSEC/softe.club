import React from 'react';
import { Slide, SlideDeck } from '../../components/SlideDeck/SlideDeck.js';
import './Slide-YAML.scss';

import yaml from 'js-yaml';

export default class AutoSlide extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            slidePath: props.slidePath,
            data: {
                title: 'Untitled presentation',
                slides: [],
            },
        };
    }

    componentDidMount() {
        const src = require(`../../slides/${this.state.slidePath}`);
        fetch(src).then(res => {
            return res.text();
        }).then(content => {
            let data = yaml.load(content);
            this.setState({
                data: data,
            })
        })
    }

    render() {
        let data = this.state.data;
        let slides = [];
        if (data.title) {
            let titleSlide = <Slide><h1>{data.title}</h1></Slide>;
            slides.push(titleSlide);
        }
        for (const [i, slide] of data.slides.entries()) {
            let justify = `justify-${slide.justify}` || '';
            let align = `align-${slide.align}` || '';
            slides.push(
                <Slide
                    key={i}
                    sticky={!!slide.sticky}
                    stickyUntil={slide.sticky?.end}
                    className={justify + ' ' + align}
                >
                    {slide.content}
                </Slide>
            )
        }
        return (
            <div>
                <SlideDeck>
                    {slides}
                </SlideDeck>
            </div>
        )
    }
}
