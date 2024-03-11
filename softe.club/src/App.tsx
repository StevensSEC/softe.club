import React, { Suspense, lazy } from "react";
import "./App.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { red, cyan } from "@material-ui/core/colors";
import Loader from "./components/Loader/Loader.js";
import ErrorBoundaryLoader from "./components/Loader/ErrorBoundaryLoader.js";
import ROUTES from "./Router.js";
import { UxContext } from "./contexts.ts";

import SecStyle from "./variables.scss";

const Header = lazy(() =>
	import(/* webpackChunkName: "components" */ "./components/Header/Header")
);
const Footer = lazy(() =>
	import(/* webpackChunkName: "components" */ "./components/Footer/Footer.jsx")
);
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
				paper: SecStyle.backgroundColor,
			},
		},
		text: {
			//change these to values in variables.scss when webpack is set up
			primary: "black",
			secondary: "red",
			tertiary: "cyan",
			quaternary: "white",
		},
	});
	let ux = React.useContext(UxContext);
	const location = useLocation();
	// Conditionally hide and show the header and footer based on the path
	// React really doesn't like having global state, especially if you need to send that state upwards through the tree
	// so that's why this piece of shit exists
	if (location.pathname.startsWith("/slides") || location.pathname.startsWith("/dev/slides")) {
		ux.headerCompact = true;
		ux.footerVisible = false;
	} else {
		ux.headerCompact = false;
		ux.headerVisible = true;
		ux.footerVisible = true;
	}

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Suspense fallback={<div>Loading...</div>}>
					<ErrorBoundaryLoader>
						{ux.headerVisible ? <Header /> : null}
					</ErrorBoundaryLoader>
					<Suspense fallback={<Loader />}>
						<ErrorBoundaryLoader>
							<div className="content-wrap">
								<Switch>
									<Redirect from="/pmt" to="/event/pimp-my-terminal" />
									<Redirect from="/fall2020" to="/guide/open-source-fall-2020" />
									{ROUTES.map(
										({ path, Component, articleProps, slideProps }, index) => {
											if (path === "/") {
												// Root view
												return (
													<Route exact path={path} key={"route-" + index}>
														<Component />
													</Route>
												);
											} else if (articleProps) {
												// Article views
												return (
													<Route path={path} key={"route-" + index}>
														<Component {...articleProps} />
													</Route>
												);
											} else if (slideProps) {
												return (
													<Route path={path} key={"route-" + index}>
														<Component {...slideProps}></Component>
													</Route>
												);
											} else {
												//Other views
												return (
													<Route path={path} key={"route-" + index}>
														<Component />
													</Route>
												);
											}
										}
									)}
								</Switch>
							</div>
							{ux.footerVisible ? <Footer /> : null}
						</ErrorBoundaryLoader>
					</Suspense>
				</Suspense>
			</div>
		</ThemeProvider>
	);
}
export default App;
