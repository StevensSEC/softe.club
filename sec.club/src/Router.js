import {lazy} from "react"

const ROUTES = [
    {
        path: "/",
        articleProps: null,
        Component: lazy(() => import(/* webpackChunkName: "home" */"./views/Home/Home.js")),
    },
    {
        path: "/slp",
        Component: lazy(() => import(/* webpackChunkName: "slp" */ "./views/SLP/SLP.js")),
    },
    {
        path: "/about",
        articleProps: {source: "about.md", title: "About",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/team",
        articleProps: {source: "team.md", title: "Team",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/contact",
        articleProps: { source: "contact.md", title: "Contact",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/resources",
        articleProps: { source: "resources.md", title: "Resources",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/git-cheatsheet",
        articleProps: { source: "git-cheatsheet.md", title: "Git Cheatsheet",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/dev-readme",
        articleProps: { source: "README.md", title: "README",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/dev/Components",
        Component: lazy(() => import(/* webpackChunkName: "demo" */ "./views/ComponentsDemo/ComponentsDemo.js")),
    },
    {
        path: "/event/pair-programming-2020",
        articleProps: { source: "event/2020-pair-programming.md", title: "Pair Programming 2020",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js"))
    },
    {
        path: "*",
        Component: lazy(() => import(/* webpackChunkName: "not-found" */"./views/NotFound/NotFound.jsx")),
    }
]

export default ROUTES;