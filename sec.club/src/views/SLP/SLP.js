import React from "react"
import { Box, Container, Grid, Paper } from "@material-ui/core"
import ProjectWall from "../../components/ProjectWall/ProjectWall"

const styles = {
  projectWall: {
    height: "100%"
  }
}

const SLPView = () => {
  return (
    <div style={styles.projectWall}>
      <ProjectWall />
    </div>
  )
}

export default SLPView
