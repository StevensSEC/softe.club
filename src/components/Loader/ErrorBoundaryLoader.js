import React from 'react'
import { motion } from 'framer-motion'
import Anime from 'react-anime';

import Loader from './Loader.js';
import './Loader.scss'

export default class ErrorBoundaryLoader extends Loader {
    constructor(props){
        super(props)
        this.style = { fill: "transparent", stroke: "#f33", strokeWidth: "1px" }
        this.state = {hasError: false}

        //the shape morphs into the body of the exclamation point
        this.loaderAnimation.points.push(
            {
                value: "100 36 100 40 100 41 100 42 100 43 100 44 100 45 100 46 100 47 100 48 100 49 100 135"
            }
            )
        this.loaderAnimation.loop = false

        const drawErrorAnimation = {
            animate: {
                pathLength: [0, 1],
                pathOffset: [1, 0],
            },
            transition: {
                delay: 1.9,
                duration: 0.8,
                ease: "easeOut",
                times: [0, 1],
            }
        }
        const drawTextAnimation = {
            animate: {
                y: [70, 0],
                opacity: [0, 1]
            },
            transition: {
                delay: 1.9,
                duration: 2,
                ease: "easeOut",
                times: [0, 1],
            },
        }

        this.loaderLogo =
        <React.Fragment>
        <motion.svg viewBox="0 0 200 200" className="loader">
            <Anime {...this.loaderAnimation}>
                <polygon points={this.initShape} style={this.style}/>
            </Anime>
            <motion.path {...drawErrorAnimation} fill="transparent" stroke="#f33" strokeWidth="1px"
                d="M 0,100
                a 100,100 0 1,0 200,0
                a 100,100 0 1,0 -200,0
                M 100 150
                l 0 10"/>
        </motion.svg>
            <motion.div {...drawTextAnimation} className="message">
                An error has occurred.
            </motion.div>
        </React.Fragment>
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
        // eslint-disable-next-line no-console
        console.error(error)
    }

    render(){
        if (this.state.hasError){
            return super.render()
        }
        return this.props.children
    }
}