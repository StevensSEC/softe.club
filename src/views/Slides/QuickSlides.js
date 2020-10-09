import React from "react";
import yaml from "js-yaml";
import { Slide, SlideDeck } from "../../components/SlideDeck/SlideDeck.js";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";

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
		fetch(src)
			.then(res => {
				return res.text();
			})
			.then(content => {
				let data = yaml.load(content);
				this.setState({
					data: data,
				});
			});
	}

	render() {
		let data = this.state.data;
		let slides = [];
		if (data.title) {
			let titleSlide = (
				<Slide>
					<h1>{data.title}</h1>
				</Slide>
			);
			slides.push(titleSlide);
		}
		for (const [i, slide] of data.slides.entries()) {
			let content = "";
			switch (slide.type) {
				case "title":
					content = (
						<div>
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
			slides.push(
				<Slide
					key={i}
					sticky={slide.sticky ?? false}
					stickyUntil={i + slide.sticky + 1 ?? 0}
				>
					{content}
				</Slide>
			);
		}
		return <SlideDeck>{slides}</SlideDeck>;
	}
}
