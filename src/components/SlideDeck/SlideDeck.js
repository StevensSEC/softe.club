import React from "react";
import PropTypes from "prop-types";
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

class Slide extends React.Component {
<<<<<<< HEAD
	static propTypes = {
		sticky: PropTypes.bool,
		stickyUntil: PropTypes.number,
	};

	constructor(props) {
		super(props);
		this.props = props;
	}
	render() {
		return (
			<Container className={`slide-content ${this.props.className}`}>
				{this.props.children}
			</Container>
		);
	}
=======
    static propTypes = {
        sticky: PropTypes.bool,
        stickyUntil: PropTypes.number,
    }

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return <Container className={`slide-content ${this.props.className}`}>{this.props.children}</Container>;
    }
>>>>>>> 87d97ed... Add automatic slide generator from YAML config
}

class InvalidChildComponentError extends TypeError { }

class SlideDeck extends React.Component {
<<<<<<< HEAD
	static contextType = UxContext;

	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			isFullscreen: false,
			stickied: {
				current: null,
				previous: [],
			},
		};

		this.props.children.forEach(child => {
			if (child.type.name !== "Slide" && process.env.NODE_ENV !== "production") {
				throw new InvalidChildComponentError(
					`All children of SlideDeck must be Slide components. Got "${child.type.name}" instead`
				);
			}
		});

		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
		this.handleSlideChange = this.handleSlideChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress, false);
	}

	handleSlideChange(e) {
		e.stopPropagation();
		this.setState({
			currentSlide: e.target.value,
		});
	}

	handleKeyPress(e) {
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

	nextSlide() {
		let next = this.state.currentSlide + 1;
		if (next > this.props.children.length - 1) {
			return;
		}
		let newstate = { currentSlide: next };
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
			this.state.stickied.current &&
			newstate.currentSlide >=
				this.props.children[this.state.stickied.current].props.stickyUntil
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
		let newstate = { currentSlide: prev };
		if (prev === this.state.stickied.current) {
			let previousStickies = this.state.stickied.previous;
			newstate.stickied = {
				current: previousStickies.length > 0 ? previousStickies.pop() : null,
				previous: previousStickies,
			};
		}
		this.setState(newstate);
	}

	setFullscreen(s) {
		this.setState({
			isFullscreen: s,
		});
	}

	slideProgress() {
		let numSlides = this.props.children.length - 1;
		if (numSlides < 2) {
			return 100;
		}
		return (this.state.currentSlide / numSlides) * 100;
	}

	render() {
		this.context.headerCompact = true;
		this.context.footerVisible = false;
		let elements = [];
		if (this.state.stickied.current) {
			elements.push(
				<div className="slide sticky" key="sticky">
					{this.props.children[this.state.stickied.current]}
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
				{this.props.children[this.state.currentSlide]}
			</div>
		);
		let progress = this.slideProgress();
		let slideSelect = [];
		for (let i = 0; i < this.props.children.length; i++) {
			slideSelect.push(<MenuItem key={i} value={i}>{`Slide ${i + 1}`}</MenuItem>);
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
=======
    static contextType = UxContext;

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            stickied: {
                current: null,
                previous: [],
            },
        };
        React.Children.toArray(this.props.children).forEach(child => {
            if (child.type.name !== "Slide" && process.env.NODE_ENV !== "production") {
                throw new InvalidChildComponentError(`All children of SlideDeck must be Slide components. Got "${child.type.name}" instead`);
            }
        })
        this.handleClick = this.handleClick.bind(this);
        this.handleOnContext = this.handleOnContext.bind(this);
    }

    nextSlide() {
        let next = this.state.currentSlide + 1;
        if (next > this.props.children.length - 1) {
            return;
        }
        let newstate = { currentSlide: next };
        if (this.props.children[this.state.currentSlide].props.sticky) {
            let previousStickies = this.state.stickied.previous;
            if (this.state.stickied.current) {
                previousStickies.push(this.state.stickied.current);
            }
            newstate.stickied = {
                current: this.state.currentSlide,
                previous: previousStickies,
            }
        }
        else if (this.state.stickied.current && newstate.currentSlide >= this.props.children[this.state.stickied.current].props.stickyUntil) {
            let previousStickies = this.state.stickied.previous;
            previousStickies.push(this.state.stickied.current);
            newstate.stickied = {
                current: null,
                previous: previousStickies,
            }
        }
        this.setState(newstate);
    }

    prevSlide() {
        let prev = this.state.currentSlide - 1;
        if (prev < 0) {
            return;
        }
        let newstate = { currentSlide: prev };
        if (prev === this.state.stickied.current) {
            let previousStickies = this.state.stickied.previous;
            newstate.stickied = {
                current: previousStickies.length > 0 ? previousStickies.pop() : null,
                previous: previousStickies,
            }
        }
        this.setState(newstate);
    }


    handleClick() {
        this.nextSlide();
    }

    handleOnContext(e) {
        e.preventDefault();
        this.prevSlide();
    }

    render() {
        this.context.headerCompact = true;
        this.context.footerVisible = false;
        let elements = [];
        if (this.state.stickied.current) {
            elements.push(
                <div className="slide sticky" key="sticky">
                    {this.props.children[this.state.stickied.current]}
                </div>
            );
        }
        elements.push(
            <div className={`slide primary ${this.state.stickied.current ? "sticky-is-present" : ""}`} key="currentSlide">
                {this.props.children[this.state.currentSlide]}
            </div>
        );
        return (
            <div className="slide-deck" onClick={this.handleClick} onContextMenu={this.handleOnContext}>
                {elements}
            </div>
        );
    }
}

export { SlideDeck, Slide }
>>>>>>> 87d97ed... Add automatic slide generator from YAML config
