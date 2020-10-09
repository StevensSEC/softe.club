import { Slide, SlideDeck } from '../../components/SlideDeck/SlideDeck.js';
import CodeBlock from "../../components/CodeBlock/CodeBlock.js";
import HtmlParser from "react-markdown/plugins/html-parser";
import Markdown from "react-markdown";
import React from 'react';
import yaml from 'js-yaml';

const parseHtml = HtmlParser({
    isValidNode: node => node.type !== 'script',
});

class MarkdownContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: props.markdown,
        };
    }

    render() {
        return <Markdown
            source={this.state.markdown}
            escapeHtml={false}
            astPlugins={[parseHtml]}
            renderers={{ code: CodeBlock }}
            transformImageUri={uri => {
                if (uri.startsWith("http")) {
                    return uri;
                }
                let img = require(`../../assets/${uri}`);
                return img.default ? img.default : img;
            }}
        />
    }
}

export default class QuickSlides extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            slidePath: props.slidePath,
            data: {
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
            // let justify = `justify-${slide.justify}` || '';
            // let align = `align-${slide.align}` || '';
            if (slide.type === undefined) {
                throw new Error(`Slide ${i + 1} missing type.`);
            }
            var content;
            if (slide.type === 'title') {
                content = <div>
                    <h1>{slide.title ?? 'Untitled presentation'}</h1>
                    <h2>{slide.subtitle ?? ''}</h2>
                </div>
            } else if (slide.type === 'side-by-side') {
                content = <div className='side-by-side'>
                    <div className='left-content'>
                        <MarkdownContent markdown={slide.content.left} />
                    </div>
                    <div className='right-content'>
                        <MarkdownContent markdown={slide.content.right} />
                    </div>
                </div>
            } else if (slide.type === 'default') {
                content = <MarkdownContent markdown={slide.content} />
            } else {
                throw new Error(`Invalid slide type ${slide.type}.`)
            }
            slides.push(
                <Slide
                    key={i}
                    sticky={slide.sticky ?? false}
                    stickyUntil={(i + slide.sticky + 1) ?? 0}
                >
                    {content}
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
