import React from "react";
import yaml from "js-yaml";
import { Slide, SlideDeck } from "../../components/SlideDeck/SlideDeck";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle.js";
import SecMarkdown from "../../components/SecMarkdown/SecMarkdown.js";
import "./QuickSlides.scss";
import Logo from "../../components/Logo/Logo";
import type { SlideProps } from "../../components/SlideDeck/SlideDeck.js";

const slides = import.meta.glob("../../slides/**/*.yaml");
const images = import.meta.glob("../../assets/**/*.(png|jpg|svg)", { eager: true });

interface QuickSlidesProps {
	slidePath: string;
}

interface QuickSlidesState {
	data: {
		title: string;
		slides: any[];
	};
}

export default class QuickSlides extends React.PureComponent<QuickSlidesProps, QuickSlidesState> {
	constructor(props: QuickSlidesProps) {
		super(props);
		this.state = {
			data: {
				title: "",
				slides: [],
			},
		};
	}

	componentDidMount() {
		slides[`../../slides/${this.props.slidePath}.yaml`]()
			.then((src: any) => {
				if (src.default) {
					return src.default;
				}
				return src;
			})
			.then((src: string) => {
				fetch(src)
					.then((res: Response) => {
						return res.text();
					})
					.then((content: string) => {
						let data = yaml.load(content);
						this.setState({
							data: data as any,
						});
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
			let content: string | JSX.Element = "";
			switch (slide.type) {
				case "title":
					let img = null;
					if (slide.img) {
						if (slide.img === "logo") {
							img = <Logo animate={false} />;
						} else {
							let imgurl = images[`../../assets/${slide.img}`] as { default: string };
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
			let slideProps: Omit<SlideProps, "children"> = {
				name: slide.name,
				sticky: false,
				stickyUntil: "",
				className: "",
			};
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
				<SlideDeck>{...slides}</SlideDeck>
			</>
		);
	}
}
