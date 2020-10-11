import React from "react";
import yaml from "js-yaml";
import { Slide, SlideDeck } from "../../components/SlideDeck/SlideDeck.js";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import "./QuickSlides.scss";

export default class QuickSlides extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			data: {
				slides: [],
            },
            slideRefs: {},
		};
	}

	componentDidMount() {
		const src = require(`../../slides/${this.props.slidePath}`);
		fetch(src)
			.then(res => {
				return res.text();
			})
			.then(content => {
                let data = yaml.load(content);
                let refs = {};
                // Use string property `ref` to assign a name to a slide
                for (const [i, slide] of data.slides.entries()) {
                    if (slide.ref) {
                        if (slide.ref in refs) {
                            throw new Error(`Cannot Duplicate slide ref '${slide.ref}'.`)
                        }
                        refs[slide.ref] = i;
                    }
                }
				this.setState({
                    data: data,
                    slideRefs: refs,
				});
            });
	}

	render() {
		let data = this.state.data;
		if (!data) {
			return null;
        }
		let slides = [];
		for (const [i, slide] of data.slides.entries()) {
			let content = "";
			switch (slide.type) {
				case "title":
					content = (
						<div className="title-slide">
							<h1>{slide.title ?? "Untitled presentation"}</h1>
							<h2>{slide.subtitle ?? ""}</h2>
						</div>
					);
					break;
				case "side-by-side":
					content = (
						<div className="side-by-side">
							<div className="left-content">
								<SecMarkdown markdown={slide.content.left} />
							</div>
							<div className="right-content">
								<SecMarkdown markdown={slide.content.right} />
							</div>
						</div>
					);
					break;
				default:
					content = <SecMarkdown markdown={slide.content} />;
					break;
			}
			let slideProps = {};
			if (slide.sticky) {
                slideProps.sticky = true;
                if (typeof slide.sticky === 'string') {
                    if (!(slide.sticky in this.state.slideRefs)) {
                        throw new Error(`Invalid ref on slide ${i + 1}: ${slide.sticky}`)
                    }
                    slideProps.stickyUntil = this.state.slideRefs[slide.sticky];
                } else if (slide.sticky !== true) {
					slideProps.stickyUntil = slide.sticky;
				}
            }
            if (slide.ref) {
                slideProps.customRef = slide.ref;
            }
			slides.push(
				<Slide key={i} {...slideProps}>
					{content}
				</Slide>
			);
		}
		return <SlideDeck>{slides}</SlideDeck>;
	}
}
