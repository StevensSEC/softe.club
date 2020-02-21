import React, { useState } from "react"
import { Container } from "@material-ui/core"
import ProjectWall from "../../components/ProjectWall/ProjectWall"
import PROJECTS from "./Projects"
import ArticleView from "../Article/Article"

const SLPView = () => {
  const [project, setProject] = useState(PROJECTS[0])
  return (
    <div className="slp-container">
      <ProjectWall setProject={setProject} />
      <Container>
        <h1>{project.name}</h1>
        <h3>{project.semester + " " + project.year}</h3>
      </Container>
      <ArticleView source={project.markdown} title={project.name} />
    </div>
  )
}

export default SLPView
