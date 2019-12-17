import React from "react"
import logo from "./logo.svg"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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
            <Route path="/semester-long-project">
              {
                //add <SLP/> component here
              }
            </Route>
            <Route path="/what-is-sec">
              {
                //add <WhatsSEC/> component here
              }
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/contact">
              {
                //add <Contact/> component here
              }
            </Route>
            <Route path="/">
              <h1>this should be home route woo</h1>
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}
function Team() {
  return <h1>im dead</h1>
}
export default App

// import React from "react"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

// function Users() {
//   return <h2>Users</h2>
// }
