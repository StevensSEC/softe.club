import React, { useState } from "react"
import "./Header.scss"
import { Button, useTheme } from "@material-ui/core"

const secLogo = require("../../assets/sec-logo.png")
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(prev => !prev)
  }
  const theme = useTheme()
  return (
    <nav id="header">
      <div id="header-brand">
        <h1>Software Engineering Club</h1>
      </div>
      <div id="header-items">
        <Button
          className="HeaderItem"
          variant="outlined"
          style={{ color: theme.text.quaternary }}
        >
          Contact
        </Button>
        <Button
          className="HeaderItem"
          variant="outlined"
          style={{ color: theme.text.quaternary }}
        >
          Our Team
        </Button>
        <Button
          className="HeaderItem"
          variant="outlined"
          style={{ color: theme.text.quaternary }}
        >
          What is SEC?
        </Button>
        <Button
          className="HeaderItem"
          variant="outlined"
          style={{ color: theme.text.quaternary }}
        >
          Semester Long Project
        </Button>
      </div>
    </nav>
  )
}
export default Header
