import React, { Suspense, lazy } from "react"
import "./App.scss"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { red, cyan } from "@material-ui/core/colors"
import Loader from "./components/Loader/Loader.js"
import ROUTES from "./Router.js"

import SecStyle from "./variables.scss"

const Header = lazy(() => import(/* webpackChunkName: "components" */"./components/Header/Header"));
const Footer = lazy(() => import(/* webpackChunkName: "components" */"./components/Footer/Footer.jsx"));
// This snippet makes the home view take longer to load intentionally. Increase the timeout to increase the load time.
// Useful for testing the loader.
// const HomeView = lazy(() => {
//   return Promise.all([
//     import(/* webpackChunkName: "home" */"./views/Home/Home.js"),
//     new Promise(resolve => setTimeout(resolve, 300))
//   ])
//   .then(([moduleExports]) => moduleExports);
// });

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: red,
      secondary: cyan,
      background: {
        default: SecStyle.backgroundColor,
        paper: SecStyle.backgroundColor
      }
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
        <Suspense fallback={<div>Loading...</div>}>
          <Header></Header>
          <Suspense fallback={<Loader/>}>
            <div className="content-wrap">
              <Switch>
                {ROUTES.map(({ path, Component, articleProps }, index) => {
                  if (path === "/") { //Root view
                    return (
                      <Route exact path={path} key={"route-" + index}>
                        <Component/>
                      </Route>
                    )
                  } else if (articleProps){ //Article views
                    return(
                      <Route path={path} key={"route-" + index}>
                        <Component {...articleProps}/>
                      </Route>
                    );
                  } else { //Other views
                    return (
                      <Route path={path} key={"route-" + index}>
                        <Component/>
                      </Route>
                    )
                  }
                })}
                <Route path="/bash-cheatsheet">
                  <ArticleView source="bash-cheatsheet.md" title="Bash Cheatsheet"/>
                </Route>
                <Route path="/powershell-cheatsheet">
                  <ArticleView source="powershell-cheatsheet.md" title="Powershell Cheatsheet"/>
                </Route>
                <Route path="/event/pimp-my-terminal">
                  <PimpMyTerminalView />
                </Route>
                <Route path="/tutorial/install-wsl">
                  <ArticleView source="events/pimp-my-terminal/howto-install-wsl.md" title="How to Install the Windows Subsystem for Linux"/>
                </Route>
                <Route path="/tutorial/enable-colors-mac">
                  <ArticleView source="events/pimp-my-terminal/howto-enable-terminal-colors-mac.md" title="How to Enable Terminal Colors on Mac"/>
                </Route>
                <Route path="/tutorial/iterm2-import-colors">
                  <ArticleView source="events/pimp-my-terminal/howto-install-iterm2-themes.md" title="How to Install iTerm2 Color Themes"/>
                </Route>
                <Route path="/tutorial/set-default-shell">
                  <ArticleView source="events/pimp-my-terminal/howto-set-default-shell.md" title="How to set the default shell"/>
                </Route>
                <Route path="/tutorial/ensure-bashrc-profile-setup">
                  <ArticleView source="events/pimp-my-terminal/howto-ensure-bashrc-profile-setup.md" title="How to make sure your bashrc/profile is set up"/>
                </Route>
                <Route path="/tutorial/cli-text-editors">
                  <ArticleView source="events/pimp-my-terminal/howto-use-cli-text-editors.md" title="How to set use terminal text editors"/>
                </Route>
                <Route path="/tutorial/vscode-theme">
                  <ArticleView source="events/pimp-my-terminal/howto-vscode-set-theme.md" title="How to set your theme in VS Code"/>
                </Route>
                </Route>
                <Redirect from="/pmt" to="/event/pimp-my-terminal" />
              </Switch>
            </div>
            <Footer/>
          </Suspense>
        </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
