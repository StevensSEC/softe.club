import openTogetherTubeLogo from "../../assets/project-wall/open-together-tube-logo.svg"
import secLogo from "../../assets/logo.svg"

const sweLogo = require("../../assets/project-wall/stevens-web-extension-logo.png")

const PROJECTS = [
  {
    path: "stevens-web-extension",
    img: sweLogo,
    name: "Stevens Web Extension",
    semester: "Spring",
    year: "2020",
    markdown: "slp/stevens-web-extension.md"
  },
  {
    path: "open-together-tube",
    img: openTogetherTubeLogo,
    name: "Open Together Tube",
    semester: "Fall",
    year: "2019",
    markdown: "slp/open-together-tube.md"
  },
  {
    path: "quick-quack",
    img: secLogo,
    name: "Quick Quack",
    semester: "Spring",
    year: "2019",
    markdown: "slp/quick-quack.md"
  },
]
export default PROJECTS
