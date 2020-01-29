import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, Button, IconButton, List, AppBar, Toolbar, Hidden } from "@material-ui/core"
import {Link as MaterialLink} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
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
      title: "What is SEC?",
      route: "about"
    },
    {
      title: "Semester Long Project",
      route: "slp"
    },
    {
      title: "Meet the Team",
      route: "team"
    },
    {
      title: "Resources",
      route: "resources"
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
    <AppBar position="relative" className="header">
      <Toolbar>
        <Hidden mdUp>
          <IconButton className="mobile" onClick={toggleDrawer("left", true)} style={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <MaterialLink
          className="barLogo"
          component={Link}
          to={'/'}
          key={'menuItem-home'}
          underline="none"
        >
          SEC
        </MaterialLink>
        <Hidden smDown>
          <div className="header-items">
            {buttonRoutes.map((button, index) => (
              <Button
                component={Link}
                to={`/${button.route}`}
                key={`menuItem-${index}`}
              >
                {button.title}
              </Button>
            ))}
            <Button onClick={toggleDrawer("left", true)} style={{ color: "white" }}>
              More
            </Button>
          </div>
        </Hidden>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
export default Header
