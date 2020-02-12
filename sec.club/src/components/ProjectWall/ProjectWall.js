import React from "react"
import "./ProjectWall.scss"
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core"
import Project from "./Project/Project"
import "../../assets/logo.scss"
import secLogo from "../../assets/logo.svg"
import openTogetherTubeLogo from "../../assets/project-wall/open-together-tube-logo.svg"

const styles = {
  projectWall: {
    flexWrap: "nowrap",
    height: "10%",
    overflow: "hidden"
  },
  project: {
    width: "20%",
    display: "flex",
    flexDirection: "column"
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
    },
    {
      img: null,
      caption: "Coming soon!",
      semester: "Fall",
      year: "2021"
    },
    {
      img: null,
      caption: "Coming soon!",
      semester: "Spring",
      year: "2022"
    },
    {
      img: null,
      caption: "Coming soon!",
      semester: "Fall",
      year: "2022"
    }
  ]
  return (
    <GridList style={styles.projectWall}>
      {PROJECTS.map((project, index) => {
        return (
          <GridListTile style={styles.project}>
            <img src={project.img} />
            <GridListTileBar title={project.caption}></GridListTileBar>
          </GridListTile>
        )
      })}
    </GridList>
  )
}
export default ProjectWall
