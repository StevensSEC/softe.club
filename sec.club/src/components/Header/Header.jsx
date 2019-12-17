import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core"
import "./Header.scss"
import { Link, BrowserRouter as Router } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    //Extra key navigation functionality
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Router>
          {["Semester Long Project", "What is SEC?", "The Team", "Contact"].map(
            (text, index) => (
              <Button key={text}>
                <Link to="/team">{text}</Link>
              </Button>
            )
          )}
        </Router>
      </List>
    </div>
  )

  return (
    <nav id="header">
      <div id="header-brand">
        <Typography variant="h4">Software Engineering Club</Typography>
      </div>
      <div id="header-items">
        <Button onClick={toggleDrawer("left", true)} style={{ color: "white" }}>
          Menu
        </Button>
      </div>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </nav>
  )
}
