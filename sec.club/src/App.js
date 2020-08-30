import React, { Suspense, lazy } from "react"
import "./App.scss"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { red, cyan } from "@material-ui/core/colors"
import Loader from "./components/Loader/Loader.js"
import ErrorBoundaryLoader from "./components/Loader/ErrorBoundaryLoader.js"
import ROUTES from "./Router.js"
import { DefaultLayout, SlideDeckLayout } from "./layouts.js"

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

function App(){

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
          <Suspense fallback={<Loader/>}>
          <ErrorBoundaryLoader>
            <div className="content-wrap">
              <Switch>
              <Redirect from="/pmt" to="/event/pimp-my-terminal" />
                {ROUTES.map(({ path, Component, articleProps, isPresentation }, index) => {
                  if (path === "/") { //Root view
                    return (
                      <Route exact path={path} key={"route-" + index}>
                        <Header/>
                        <Suspense fallback={<Loader/>}>
                            <Component/>
                        </Suspense>
                      </Route>
                    )
                  } else if (articleProps){ //Article views
                    return <DefaultLayout path={path} key={"route-" + index} component={<Component {...articleProps}/>}/>
                  } else if (isPresentation){
                    return <SlideDeckLayout path={path} key={"route-" + index} component={<Component/>}/>
                  } else { //Other views
                    return <DefaultLayout path={path} key={"route-" + index} component={<Component/>}/>
                  }
                })}
              </Switch>
            </div>
            <Footer/>
          </ErrorBoundaryLoader>
          </Suspense>
        </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  )
}
export default App
