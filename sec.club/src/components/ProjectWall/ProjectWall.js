import React, { useState, useEffect } from "react"
import "./ProjectWall.scss"
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Paper
} from "@material-ui/core"
import Project from "./Project/Project"
import secLogo from "../../assets/logo.svg"
import nextIcon from "../../assets/next.svg"
import PROJECTS from "../../views/SLP/Projects"

const styles = {
  projectWall: {
    position: "relative",
    display: "flex",
    overflow: "scroll",
    // overflowX: "scroll",
    width: "100%",
    height: "100px",
    scrollBehavior: "smooth"
  },
  project: {
    display: "flex",
    height: "100%"
  },
  imgContainer: {
    display: "flex",
    width: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "50%",
    borderRadius: "50%",
    border: "4px solid black"
  },
  captionContainer: {
    display: "flex",
    width: "75%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  scrollContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  scrollButton: {
    backgroundColor: "white",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    opacity: 0.5
  }
}

const ProjectWall = ({ setProject }) => {
  const scroll = elementIndex => {
    // Rudimentary functionality for now: scroll to end or scoll to beginning
    // TODO: Scroll to first element not visible in current viewport
    document.getElementById(`project-${elementIndex}`).scrollIntoView()
  }
  useEffect(() => {})
  return (
    <>
      <div style={styles.projectWall}>
        {PROJECTS.map((project, index) => {
          return (
            <div style={styles.project} className="ProjectTile">
              <div style={styles.imgContainer}>
                <img style={styles.img} src={project.img} />
              </div>
              <div style={styles.captionContainer}>
                <h1 style={{ fontSize: "20px" }}>{project.caption}</h1>
                <h5>{`${project.semester} ${project.year}`}</h5>
              </div>
            </div>
          )
        })}
      </div>
      {/* // This section can be uncommented in far future when we have more SLPs */}
      {/* <div style={styles.scrollContainer}>
        <div
          style={{ ...styles.scrollButton, borderRight: "2px solid black" }}
          onClick={() => scroll(0)}
        >
          <img
            src={nextIcon}
            style={{
              display: "inline-block",
              transform: "rotate(180deg)"
            }}
          ></img>
        </div>
        <div
          style={{ ...styles.scrollButton, borderLeft: "2px solid black" }}
          onClick={() => scroll(PROJECTS.length - 1)}
        >
          <img src={nextIcon}></img>
        </div>
      </div> */}
    </>
  )
}
export default ProjectWall
