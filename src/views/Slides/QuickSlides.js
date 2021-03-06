import React from "react";
import yaml from "js-yaml";
import { Slide, SlideDeck } from "../../components/SlideDeck/SlideDeck.js";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import "./QuickSlides.scss";
import Logo from "../../components/Logo/Logo.jsx";

export default class QuickSlides extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			data: {
				title: "",
				slides: [],
			},
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
				this.setState({
					data: data,
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
					let img = null;
					if (slide.img) {
						if (slide.img === "logo") {
							img = <Logo />;
						} else {
							let imgurl = require(`../../assets/${slide.img}`);
							img = (
								<img
									src={imgurl.default ?? imgurl}
									alt={slide.imgalt ?? "hero image"}
								/>
							);
						}
					}
					content = (
						<div className="title-slide">
							{img ? <div className="hero">{img}</div> : null}
							<h1>{slide.title}</h1>
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
				if (typeof slide.sticky === "string" || slide.sticky !== true) {
					slideProps.stickyUntil = slide.sticky;
				}
			}
			if (slide.name) {
				slideProps.name = slide.name;
			}
			slides.push(
				<Slide key={i} {...slideProps}>
					{content}
				</Slide>
			);
		}
		return (
			<>
				<DocumentTitle title={this.state.data.title ?? ""} />
				<SlideDeck>{slides}</SlideDeck>
			</>
		);
	}
}
