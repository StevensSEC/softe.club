import openTogetherTubeLogo from "../../assets/project-wall/open-together-tube-logo.svg"
import secLogo from "../../assets/logo.svg"

const PROJECTS = [
  {
    path: "quick-quack",
    img: secLogo,
    name: "Quick Quack",
    semester: "Spring",
    year: "2019",
    markdown: "slp/quick-quack.md"
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
    path: "stevens-web-extension",
    img: secLogo,
    name: "Stevens Web Extension",
    semester: "Spring",
    year: "2020",
    markdown: "slp/stevens-web-extension.md"
  },
  {
    path: "open-source-fall-2020",
    img: secLogo,
    name: "Open Source Contributions",
    semester: "Fall",
    year: "2020",
    markdown: "fall-2020-open-source-projects.md" // TODO: replace with our normal SLP page
  },
]
export default PROJECTS
