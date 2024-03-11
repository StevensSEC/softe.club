import React, { type ReactNode } from "react";
// import PropTypes from "prop-types";
import {
	Container,
	Divider,
	InputLabel,
	MenuItem,
	Select,
	LinearProgress,
} from "@material-ui/core";
import "./SlideDeck.scss";
import { UxContext } from "../../contexts.js";
import { Fullscreen, KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

export interface SlideProps {
	name?: string;
	sticky?: boolean;
	stickyUntil?: number | string;
	className?: string;
	children: any;
}

const Slide: React.FC<SlideProps> = (props) => {
	return (
		<Container className={`slide-content ${props.className}`}>
			{props.children}
		</Container>
	);
}

// class InvalidChildComponentError extends TypeError {}

interface SlideDeckProps {
}

interface SlideDeckState {
	currentSlide: number;
	isFullscreen: boolean;
	stickied: {
		current: number | null;
		previous: number[];
	};
}

/**
 * Powerpoint, but in react.
 *
 * Important gotchas:
 * - All children must be `Slide` components.
 * - When a slide is displayed, not all of the slides are rendered to the DOM. Only the current slide, and a sticky slide (if present).
 *
 * Docs URL: /dev/docs/slidedecks
 */
class SlideDeck extends React.Component<SlideDeckProps, SlideDeckState> {
	// static propTypes = {
	// 	children: (props: SlideProps, propName: string, componentName: string) => {
	// 		let _tmpSlideNames = {};
	// 		React.Children.toArray(props.children).forEach((child, i) => {
	// 			if (child.type.name !== "Slide" && process.env.NODE_ENV !== "production") {
	// 				return new InvalidChildComponentError(
	// 					`All children of SlideDeck must be Slide components. Got "${child.type.name}" instead`
	// 				);
	// 			}
	// 			// Build reference map from slide references (names)
	// 			let name = child.props.name;
	// 			if (name) {
	// 				if (name in _tmpSlideNames) {
	// 					return new Error(`Cannot have duplicate slide name '${name}'.`);
	// 				}
	// 				_tmpSlideNames[name] = i;
	// 			}
	// 		});
	// 		// Validates that all slide name references are valid
	// 		React.Children.toArray(props.children).forEach((slide, i) => {
	// 			if (typeof slide.stickyUntil === "string") {
	// 				if (!(slide.stickyUntil in _tmpSlideNames)) {
	// 					return new Error(`Invalid name on slide ${i + 1}: ${slide.stickyUntil}`);
	// 				}
	// 			}
	// 		});
	// 	},
	// };

	static contextType = UxContext;

	constructor(props: any) {
		super(props);
		this.state = {
			currentSlide: 0,
			isFullscreen: false,
			stickied: {
				current: null,
				previous: [],
			},
		};

		this.getStickyUntil = this.getStickyUntil.bind(this);
		this.getSlideNames = this.getSlideNames.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
		this.handleSlideChange = this.handleSlideChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	shouldComponentUpdate() {
		return true;
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress, false);
	}

	getSlideNames() {
		let slideNames: Record<string, number> = {};
		// @ts-expect-error temporary
		React.Children.toArray(this.props.children).forEach((child, i) => {
			if (!React.isValidElement(child)) {
				return;
			}
			// Build reference map from slide references (names)
			let name = child.props.name;
			if (name) {
				if (name in slideNames) {
					throw new Error(`Cannot have duplicate slide name '${name}'.`);
				}
				slideNames[name] = i;
			}
		});
		return slideNames;
	}

	getStickyUntil(): number | undefined {
		// @ts-expect-error temporary
		if (!this.state.stickied.current || !this.props.children) {
			return undefined;
		}
		// @ts-expect-error temporary
		let endSlide = this.props.children[this.state.stickied.current].props.stickyUntil;
		if (endSlide === undefined) {
			return undefined;
		}
		return typeof endSlide === "string" ? this.getSlideNames()[endSlide] : endSlide;
	}

	handleKeyPress(e: KeyboardEvent) {
		if (e.key === "Escape") {
			this.setState({
				isFullscreen: false,
			});
		} else if (e.key === "ArrowLeft") {
			this.prevSlide();
		} else if (e.key === "ArrowRight") {
			this.nextSlide();
		}
	}

	handleSlideChange(e: any) {
		e.stopPropagation();
		this.setState({
			currentSlide: e.target.value,
		});
	}

	nextSlide() {
		let next = this.state.currentSlide + 1;
		// @ts-expect-error temporary
		if (next > this.props.children.length - 1) {
			return;
		}
		let newstate = { currentSlide: next, stickied: this.state.stickied };
		// @ts-expect-error temporary
		if (this.props.children[this.state.currentSlide].props.sticky) {
			let previousStickies = this.state.stickied.previous;
			if (this.state.stickied.current) {
				previousStickies.push(this.state.stickied.current);
			}
			newstate.stickied = {
				current: this.state.currentSlide,
				previous: previousStickies,
			};
		} else if (
			this.state.stickied.current !== null &&
			newstate.currentSlide >= (this.getStickyUntil() ?? 0)
		) {
			let previousStickies = this.state.stickied.previous;
			previousStickies.push(this.state.stickied.current);
			newstate.stickied = {
				current: null,
				previous: previousStickies,
			};
		}
		this.setState(newstate);
	}

	prevSlide() {
		let prev = this.state.currentSlide - 1;
		if (prev < 0) {
			return;
		}
		let newstate = { currentSlide: prev, stickied: this.state.stickied };
		if (prev === this.state.stickied.current) {
			let previousStickies = this.state.stickied.previous;
			newstate.stickied = {
				current: previousStickies.length > 0 ? previousStickies.pop() ?? null : null,
				previous: previousStickies,
			};
		}
		this.setState(newstate);
	}

	setFullscreen(s: boolean) {
		this.setState({
			isFullscreen: s,
		});
	}

	slideProgress() {
		// @ts-expect-error temporary
		let numSlides = this.props.children.length - 1;
		if (numSlides < 2) {
			return 100;
		}
		return (this.state.currentSlide / numSlides) * 100;
	}

	render() {
		// @ts-expect-error temporary
		this.context.headerCompact = true;
		// @ts-expect-error temporary
		this.context.footerVisible = false;
		let elements = [];
		if (this.state.stickied.current !== null) {
			elements.push(
				<div className="slide sticky" key="sticky">
				{/* @ts-expect-error temporary */}
					{this.props.children[this.state.stickied.current] as ReactNode}
				</div>
			);
		}
		elements.push(
			<div
				className={`slide primary ${
					this.state.stickied.current ? "sticky-is-present" : ""
				}`}
				key="currentSlide"
				>
				{/* @ts-expect-error temporary */}
				{this.props.children[this.state.currentSlide]}
			</div>
		);
		let progress = this.slideProgress();
		let slideSelect = [];
		// @ts-expect-error temporary
		for (let i = 0; i < this.props.children.length; i++) {
		// @ts-expect-error temporary
			let name = this.props.children[i].props.name ?? `Slide ${i + 1}`;
			slideSelect.push(
				<MenuItem key={i} value={i}>
					{name}
				</MenuItem>
			);
		}
		let fullscreenClass = this.state.isFullscreen ? "slide-deck-fullscreen" : "";
		return (
			<div
				className={`slide-deck ${fullscreenClass}`}
				onClick={e => {
					e.preventDefault();
					this.nextSlide();
				}}
				onContextMenu={e => {
					e.preventDefault();
					this.prevSlide();
				}}
			>
				{elements}
				<Container className={`slide-deck-controls ${fullscreenClass}`}>
					<div className="control-slide">
						<KeyboardArrowLeft
							className="slide-deck-control-btn"
							onClick={e => {
								e.stopPropagation();
								this.prevSlide();
							}}
						></KeyboardArrowLeft>
						<KeyboardArrowRight
							className="slide-deck-control-btn"
							onClick={e => {
								e.stopPropagation();
								this.nextSlide();
							}}
						></KeyboardArrowRight>
						<InputLabel id="slide-deck-selector"></InputLabel>
						<Select
							className="slide-deck-selector"
							labelId="slide-deck-selector"
							value={this.state.currentSlide}
							onChange={this.handleSlideChange}
						>
							{slideSelect}
						</Select>
					</div>
					<div className="control-options">
						<Fullscreen
							className="slide-deck-control-btn"
							onClick={e => {
								e.stopPropagation();
								this.setFullscreen(true);
							}}
						></Fullscreen>
					</div>
					<Divider orientation="vertical"></Divider>
					<div className="control-feedback">
						<LinearProgress
							className="slide-deck-progress"
							variant="determinate"
							value={progress}
						></LinearProgress>
					</div>
				</Container>
			</div>
		);
	}
}

export { SlideDeck, Slide };
