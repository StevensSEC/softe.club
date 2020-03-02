import React, {lazy} from "react"

const HomeView = lazy(() => import(/* webpackChunkName: "home" */"./views/Home/Home.js"));
const NotFoundView = lazy(() => import(/* webpackChunkName: "not-found" */"./views/NotFound/NotFound.jsx"));
const ArticleView = lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js"))
const ComponentsDemoView = lazy(() => import(/* webpackChunkName: "demo" */ "./views/ComponentsDemo/ComponentsDemo.js"))
const SLPView = lazy(() => import(/* webpackChunkName: "slp" */ "./views/SLP/SLP.js"))

const ROUTES = [
    {
        path: "/",
        component: <HomeView/>,
    },
    {
        path: "/slp",
        component: <SLPView/>,
    },
    {
        path: "/about",
        component: <ArticleView source="about.md" title="About"/>,
    },
    {
        path: "/team",
        component: <ArticleView source="team.md" title="Team"/>,
    },
    {
        path: "/contact",
        component: <ArticleView source="contact.md" title="Contact"/>,
    },
    {
        path: "/resources",
        component: <ArticleView source="resources.md" title="Resources"/>,
    },
    {
        path: "/git-cheatsheet",
        component: <ArticleView source="git-cheatsheet.md" title="Git Cheatsheet"/>,
    },
    {
        path: "/dev-readme",
        component: <ArticleView source="README.md" title="README"/>,
    },
    {
        path: "/dev/components",
        component: <ComponentsDemoView/>,
    },
    {
        path: "/event/pair-programming-2020",
        component: <ArticleView source="events/2020-pair-programming.md" title="Pair Programming 2020"/>
    },
    {
        path: "*",
        component: <NotFoundView/>,
    }
]

export default ROUTES;