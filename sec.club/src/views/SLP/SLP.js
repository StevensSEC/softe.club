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
    <div>
      <div style={styles.projectWall}>
        <ProjectWall />
      </div>
    </div>
  )
}

export default SLPView
