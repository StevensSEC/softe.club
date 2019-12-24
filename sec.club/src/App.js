import React from "react"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ArticleView from "./views/Article/Article.js";

function App() {
  const theme = createMuiTheme({
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
            <Route exact path="/">
              <h1>hi this is home :)</h1>
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
