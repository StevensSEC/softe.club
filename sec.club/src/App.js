import React from "react"
import logo from "./logo.svg"
import "./App.scss"
import Header from "./components/Header/Header"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
      </div>
    </ThemeProvider>
  )
}

export default App
