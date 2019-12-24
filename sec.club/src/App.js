import React from "react"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ResourcesView from "./views/Resources/Resources.js";
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
              <h1>Add SLP info page here</h1>
            </Route>
            <Route path="/about">
              <ArticleView source="about.md" />
            </Route>
            <Route path="/team">
              <h1>Add team information page here</h1>
            </Route>
            <Route path="/contact">
              <h1>Add contact page here</h1>
            </Route>
            <Route path="/resources">
              <ResourcesView />
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
