import React, { useState } from "react"
import { Box, Container, Grid, Paper } from "@material-ui/core"
import ProjectWall from "../../components/ProjectWall/ProjectWall"
import PROJECTS from "./Projects"
import ArticleView from "../Article/Article"

const styles = {
  slpContainer: {},
  projectWall: {},
  content: {
    padding: "5%"
  }
}

const SLPView = () => {
  const [project, setProject] = useState(PROJECTS[0])
  return (
    <div style={styles.slpContainer}>
      <div style={styles.projectWall}>
        <ProjectWall setProject={setProject} />
      </div>
      <div style={styles.content}>
        <h1>{project.caption}</h1>
        <h3>{project.semester + " " + project.year}</h3>
        <ArticleView source={project.markdown}></ArticleView>
      </div>
    </div>
  )
}

export default SLPView
