import React, { useState, useEffect } from "react"
import "./ProjectWall.scss"
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Paper
} from "@material-ui/core"
import Project from "./Project/Project"
import "../../assets/logo.scss"
import secLogo from "../../assets/logo.svg"
import nextIcon from "../../assets/next.svg"
import PROJECTS from "../../views/SLP/Projects"

const styles = {
  projectWall: {
    position: "relative",
    flexWrap: "nowrap",
    height: "10%",
    overflow: "hidden",
    scrollBehavior: "smooth"
  },
  project: {
    width: "20%",
    display: "flex",
    flexDirection: "column"
  },
  // scrollButton: {
  //   backgroundColor: "white",
  //   position: "absolute",
  //   display: "flex",
  //   justifyContent: "center",
  //   borderRadius: "50%",
  //   zIndex: 2,
  //   width: "25px",
  //   height: "auto",
  //   right: "2%",
  //   top: "50%"
  // }
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
  return (
    <>
      <GridList style={styles.projectWall} id="project-wall">
        {PROJECTS.map((project, index) => {
          return (
            <GridListTile
              style={styles.project}
              id={`project-${index}`}
              onClick={() => setProject(project.caption)}
            >
              <img src={project.img} />
              <GridListTileBar title={project.caption}></GridListTileBar>
            </GridListTile>
          )
        })}
      </GridList>
      <div style={styles.scrollContainer}>
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
      </div>
    </>
  )
}
export default ProjectWall
