import React, { useState } from "react"
import { Box, Container, Grid, Paper } from "@material-ui/core"
import ProjectWall from "../../components/ProjectWall/ProjectWall"
import PROJECTS from "./Projects"

const styles = {
  projectWall: {
    height: "100%"
  },
  content: {
    padding: "5%"
  }
}

const SLPView = () => {
  const [project, setProject] = useState(PROJECTS[0])
  console.log(project)
  return (
    <div style={styles.projectWall}>
      <ProjectWall setProject={setProject} />
      <div style={styles.content}>
        <h1>{project.caption}</h1>
        <h3>{project.semester + " " + project.year}</h3>
      </div>
    </div>
  )
}

export default SLPView
