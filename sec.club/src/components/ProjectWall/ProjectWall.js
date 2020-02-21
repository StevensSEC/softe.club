import React, { useState, useEffect } from "react"
import "./ProjectWall.scss"
import Project from "./Project/Project"
import secLogo from "../../assets/logo.svg"
import nextIcon from "../../assets/next.svg"
import PROJECTS from "../../views/SLP/Projects"

const styles = {
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
      <div className="project-wall">
        {PROJECTS.map((project, index) => {
          return (
            <div className="project">
              <div class="img-container">
                <img src={project.img} alt={`Logo for ${project.name}`} />
              </div>
              <div className="name">
                <span style={{ fontSize: "20px" }}>{project.name}</span>
                <span>{`${project.semester} ${project.year}`}</span>
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
