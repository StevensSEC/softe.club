import React, { Suspense, lazy } from "react"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { red, cyan } from "@material-ui/core/colors";

const HomeView = lazy(() => import("./views/Home/Home.js"));
const ArticleView = lazy(() => import("./views/Article/Article.js"));

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
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
