import React from "react"
import "./ProjectWall.scss"
import { AppBar, Tabs, TabPanel, Tab } from "@material-ui/core"
import Project from "./Project/Project"
import "../../assets/logo.scss"
import secLogo from "../../assets/logo.svg"
import openTogetherTubeLogo from "../../assets/project-wall/open-together-tube-logo.svg"

const styles = {
  container: {
    backgroundColor: "white",
    overflow: "scroll"
  }
}

const ProjectWall = () => {
  const PROJECTS = [
    {
      img: null,
      caption: "Quick Quack",
      semester: "Spring",
      year: "2019"
    },
    {
      img: openTogetherTubeLogo,
      caption: "Open Together Tube",
      semester: "Fall",
      year: "2019"
    },
    {
      img: null,
      caption: "Coming very soon! lorem iupsu mfdskaj klfdkls afj dklsaj f",
      semester: "Spring",
      year: "2020"
    },
    {
      img: null,
      caption: "Coming soon!",
      semester: "Fall",
      year: "2020"
    },
    {
      img: null,
      caption: "Coming soon!",
      semester: "Spring",
      year: "2021"
    }
  ]
  return (
    <AppBar position="static" style={styles.container}>
      <Tabs>
        {PROJECTS.map((project, index) => {
          return <Project project={project} />
        })}
      </Tabs>
    </AppBar>
  )
}
export default ProjectWall
