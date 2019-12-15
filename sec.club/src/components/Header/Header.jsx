import React, { useState } from "react"
import "./Header.scss"
const secLogo = require("../../assets/sec-logo.png")
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <nav id="header">
      <div id="header-brand">
        <h1>Software Engineering Club</h1>
      </div>
      <div id="header-items">
        <a className="HeaderItem">Semester Long Project</a>
        <a className="HeaderItem">What is SEC?</a>
        <a className="HeaderItem">Our Team</a>
        <a className="HeaderItem">Contact</a>
      </div>
    </nav>
  )
}
export default Header
