import React from "react"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomeView from "./views/Home/Home.js";
import ArticleView from "./views/Article/Article.js";
import { red, cyan } from "@material-ui/core/colors";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: red,
      secondary: cyan,
    },
    text: {
      //change these to values in variables.scss when webpack is set up
      primary: "black",
      secondary: "red",
      tertiary: "cyan",
      quaternary: "white"
    }
  })
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/slp">
              <ArticleView source="slp.md" />
            </Route>
            <Route path="/about">
              <ArticleView source="about.md" />
            </Route>
            <Route path="/team">
              <ArticleView source="team.md" />
            </Route>
            <Route path="/contact">
              <ArticleView source="contact.md" />
            </Route>
            <Route path="/resources">
              <ArticleView source="resources.md" />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
