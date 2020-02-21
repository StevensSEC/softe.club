import React, { lazy } from "react"
import { Switch, Route, Redirect, useParams } from "react-router-dom"
import ProjectWall from "../../components/ProjectWall/ProjectWall"
import PROJECTS from "./Projects"

const ArticleView = lazy(() => import(/* webpackChunkName: "article" */ "../Article/Article.js"))

const ProjectContent = () => {
  let { projectPath } = useParams();
  let project = PROJECTS.filter(p => p.path === projectPath)[0];
  return (
    <ArticleView source={project.markdown} title={project.name} />
  )
}

const SLPView = () => {
  return (
    <div>
      <ProjectWall />
      <Switch>
        <Redirect exact from="/slp" to={`/slp/${PROJECTS[0].path}`} />
        <Route path="/slp/:projectPath">
          <ProjectContent />
        </Route>
      </Switch>
    </div>
  )
}

export default SLPView
