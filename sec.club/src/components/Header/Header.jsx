import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, List, Hidden } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import "./Header.scss"
import Button from "../Button/Button.js";

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
      route: "/about"
    },
    {
      title: "Semester Long Project",
      route: "/slp"
    },
    {
      title: "Meet the Team",
      route: "/team"
    },
    {
      title: "Resources",
      route: "/resources"
    },
    {
      title: "Contact",
      route: "/contact"
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
            className="drawer-item"
            kind="menu"
            to={button.route}
            key={`menuItem-${index}`}
          >
            {button.title}
          </Button>
        ))}
      </List>
    </div>
  )

  return (
    <header className="sec-header">
      <div className="header-content">
        <Hidden mdUp>
          <Button kind="icon" className="mobile" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </Button>
        </Hidden>
        <Button
          kind="menu"
          className="barLogo"
          to={'/'}
          key={'menuItem-home'}
        >
          SEC
        </Button>
        <Hidden smDown>
          <div className="header-items">
            {buttonRoutes.map((button, index) => (
              <Button
                kind="menu"
                to={button.route}
                key={`menuItem-${index}`}
              >
                {button.title}
              </Button>
            ))}
            <Button kind="menu" onClick={toggleDrawer("left", true)}>
              More
            </Button>
          </div>
        </Hidden>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
      </div>
    </header>
  )
}
export default Header
