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
        path: "/dev/readme",
        articleProps: { source: "README.md", title: "README",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/dev/components",
        Component: lazy(() => import(/* webpackChunkName: "demo" */ "./views/ComponentsDemo/ComponentsDemo.js")),
    },
    {
        path: "/dev/slide_deck",
        Component: lazy(() => import(/* webpackChunkName: "slide_deck_demo" */ "./views/SlideDeckDemo/SlideDeckDemo.js")),
    },
    {
        path: "/event/pair-programming-2020",
        articleProps: { source: "event/2020-pair-programming.md", title: "Pair Programming 2020",},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js"))
    },
    {
        path: "/bash-cheatsheet",
        articleProps: {source: "bash-cheatsheet.md", title: "Bash Cheatsheet"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/powershell-cheatsheet",
        articleProps: {source: "powershell-cheatsheet.md", title: "Powershell Cheatsheet"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/event/pimp-my-terminal",
        Component: lazy(() => import(/* webpackChunkName: "pmt" */ "./views/PimpMyTerminal/PimpMyTerminal.js")),
    },
    {
        path: "/tutorial/install-wsl",
        articleProps: { source: "events/pimp-my-terminal/howto-install-wsl.md", title: "How to Install the Windows Subsystem for Linux"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/enable-colors-mac",
        articleProps: { source: "events/pimp-my-terminal/howto-enable-terminal-colors-mac.md", title: "How to Enable Terminal Colors on Mac"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/iterm2-import-colors",
        articleProps: { source: "events/pimp-my-terminal/howto-install-iterm2-themes.md", title: "How to Install iTerm2 Color Themes"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/set-default-shell",
        articleProps: { source: "events/pimp-my-terminal/howto-set-default-shell.md", title: "How to set the default shell"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/ensure-bashrc-profile-setup",
        articleProps: { source: "events/pimp-my-terminal/howto-ensure-bashrc-profile-setup.md", title: "How to make sure your bashrc/profile is set up"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/cli-text-editors",
        articleProps: { source: "events/pimp-my-terminal/howto-use-cli-text-editors.md", title: "How to use terminal text editors"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/vscode-theme",
        articleProps: { source: "events/pimp-my-terminal/howto-vscode-set-theme.md", title: "How to set your theme in VS Code"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "/tutorial/set-default-terminal",
        articleProps: { source: "events/pimp-my-terminal/howto-set-default-terminal.md", title: "How to set your default terminal"},
        Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
    },
    {
        path: "*",
        Component: lazy(() => import(/* webpackChunkName: "not-found" */"./views/NotFound/NotFound.jsx")),
    },
]

export default ROUTES;
