import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "./components/Loader/Loader.js";

const Header = lazy(() => import(/* webackChunkName: "components" */"./components/Header/Header"));
const Footer = lazy(() => import(/* webackChunkName: "components" */"./components/Footer/Footer"));

class DefaultLayout extends React.Component {
    render(){
        return(
        <Route path={this.props.path} key={this.props.key}>
            <Header/>
                <Suspense fallback={<Loader/>}>
                    {this.props.component}
                </Suspense>
        </Route>
        )
    }
}

class SlideDeckLayout extends React.Component {
     render(){
        return(
        <Route path={this.props.path} key={this.props.key}>
            <Suspense fallback={<Loader/>}>
                {this.props.component}
            </Suspense>
        </Route>
        )
    }
}

export { DefaultLayout, SlideDeckLayout };
