import React from "react"
import PropTypes from 'prop-types'
import "./ProjectWall.scss"
import { NavLink } from "react-router-dom"
import { motion, useViewportScroll, useSpring } from 'framer-motion'
import PROJECTS from "../../views/SLP/Projects"

class Project extends React.Component {
  static propTypes = {
		project: PropTypes.object.isRequired,
  }

  constructor(props) {
    super();
    this.props = props;
    this.state = {showName: this.props.showName}
  }

  render() {
    return (
      <NavLink 
    kind="menu" 
    to={`/slp/${this.props.project.path}`} 
    className={`project${this.props.className ? " " + this.props.className : ""}`} 
    activeClassName="active" 
  >
    <div className="img-container">
      <img src={this.props.project.img} alt={`Logo for ${this.props.project.name}`} />
    </div>
    {this.props.showName && (<div className="name">
      <span>{this.props.project.name}</span>
      <span>{`${this.props.project.semester} ${this.props.project.year}`}</span>
    </div>)}
  </NavLink>
    )
  }
}

const ProjectWall = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    showNames: false,
  })

  const handleOnMouseEnter = () => {
    if (state.showNames) { //only set the state if it needs to be reset
      return;
    } else {
      setState({...state, showNames: true});
    }
  }

  const handleOnMouseOver = () => {
    if (state.showNames) { //only set the state if it needs to be reset
      return;
    } else {
      setState({...state, showNames: true});
    }
  }

  const handleOnMouseLeave = () => {
    if (!state.showNames) {
      return;
    } else {
      setState({...state, showNames: false});
    }
  }

  const { scrollY } = useViewportScroll();
  const divY = useSpring(scrollY, { stiffness: 200, damping: 30 });

  return (
    <motion.div 
      className="project-wall" 
      y={divY}
      onMouseEnter={handleOnMouseEnter}
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}>
      {PROJECTS.map((project, index) => (
        <Project project={project} key={`project-${index}`} showName={state.showNames}/>
      ))}
    </motion.div>
  )
}
export default ProjectWall
