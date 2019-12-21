import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, Button, List, Typography } from "@material-ui/core"
import "./Header.scss"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
})

const Header = () => {
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
  const buttonRoutes = [
    {
      title: "Home",
      route: ""
    },
    {
      title: "Semester Long Project",
      route: "slp"
    },
    {
      title: "What is SEC?",
      route: "about"
    },
    {
      title: "Meet the Team",
      route: "team"
    },
    {
      title: "Contact",
      route: "contact"
    }
  ]
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {buttonRoutes.map((button, index) => (
          <Button
            component={Link}
            to={`/${button.route}`}
            key={`menuItem-${index}`}
          >
            {button.title}
          </Button>
        ))}
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
export default Header
