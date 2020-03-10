import React from "react"
import PropTypes from 'prop-types'
import "./ProjectWall.scss"
import { NavLink } from "react-router-dom"
import { motion, useViewportScroll } from 'framer-motion'
import { Drawer } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from "../Button/Button.js";
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

  const toggleDrawer = (side, open) => event => {
    //Extra key navigation functionality
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const handleOnMouseEnter = () => {
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

  return (
    <motion.div 
      className="project-wall" 
      y={scrollY}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      {PROJECTS.map((project, index) => (
        <Project project={project} key={`project-${index}`} showName={state.showNames}/>
      ))}
      {/* <Button kind="icon" className="mobile" onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </Button>
      {PROJECTS.map((project, index) => (
        <Project project={project} key={`project-${index}`} />
      ))}
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer("top", false)}>
        <Button kind="icon" onClick={toggleDrawer("top", false)} style={{ width: "24px", margin: "4px" }}>
          <CloseIcon />
        </Button>
        {PROJECTS.map((project, index) => (
          <Project project={project} className="drawer-item" key={`project-${index}`} onClick={toggleDrawer("top", false)} />
        ))}
      </Drawer> */}
    </motion.div>
  )
}
export default ProjectWall
