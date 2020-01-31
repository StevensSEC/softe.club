import React from "react"
import "./Project.scss"
import "../../../assets/logo.scss"
import logo from "../../../assets/logo.svg"
import { ReactSVG } from "react-svg"
import { GridListTile, Grid, Typography, Paper } from "@material-ui/core"

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    margin: "5px",
    backgroundColor: "grey",
    width: "300px"
  },
  logoContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black"
  },
  captionContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    padding: "5%"
  }
}

const Project = ({ project }) => {
  return (
    <div style={styles.root}>
      {project.img ? (
        <div style={styles.logoContainer}>
          <ReactSVG className="Logo" src={project.img} />
        </div>
      ) : (
        <div style={styles.logoContainer}>
          <ReactSVG className="Logo" src={logo} />
        </div>
      )}
      <div style={styles.captionContainer}>
        <h4>{project.caption}</h4>
        <h6>
          {project.semester} {project.year}
        </h6>
      </div>
    </div>
  )
}
export default Project
