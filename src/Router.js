import { lazy } from "react";

const ATTENDANCE_URL =
	"https://stevens.campuslabs.com/engage/event/6554025/attend?Vud=10/25/2020&Vut=02:00:00&Hash=EMRQ1-WJTUKfayRIfY01f3Sy6XGVVCNiQYzoMTTBnyyqmIne18ZSwXYX0p6KcCe3xJ-wi_1RYCmtQ10caeUS3Cg1e-AB1qW45wSAqAWvmLDvIVTwBzDksROoZUElNjmQkF1ZqocqKGOi1niVf-hu67NjAJiDTewlB6lAfxKop3u94opguESF3TK7OTLju7Hme97GJvQnZXc1DCfdfvItTKx6T6Fn6UuJf-lXDHzQPpQ7FHj51r4j7_jPOO3vzRp97twaVhPA7O_kWoVkHUbBoJ9kHKn3DtxYZbq5JCdRXEQ6JMe8Q7s8Ou5AU-rdIVbZDUH0RPd8PBMbk387mG4NHQ";

const ROUTES = [
	{
		path: "/",
		articleProps: null,
		Component: lazy(() => import(/* webpackChunkName: "home" */ "./views/Home/Home.js")),
	},
	{
		path: "/slp",
		Component: lazy(() => import(/* webpackChunkName: "slp" */ "./views/SLP/SLP.js")),
	},
	{
		path: "/about",
		articleProps: { source: "about.md", title: "About" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/team",
		Component: lazy(() => import(/* webpackChunkName: "team" */ "./views/Team/Team.jsx")),
	},
	{
		path: "/contact",
		articleProps: { source: "contact.md", title: "Contact" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/resources",
		articleProps: { source: "guides/resources.md", title: "Resources" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/faq",
		articleProps: { source: "faq.md", title: "FAQ" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	// HACK: This is required to redirect to an external page. The `Redirect` component only redirects to paths on the same host.
	{
		path: "/slack",
		Component: () => {
			window.location.href = "https://secstevens.slack.com";
			return null;
		},
	},
	{
		path: "/gh-submit",
		Component: () => {
			// Form for submitting github usernames fall 2020
			window.location.href = "https://forms.gle/Z5ezNfinyBV6HeqA8";
			return null;
		},
	},
	{
		path: "/imhere",
		Component: () => {
			// shortcut to mark yourself as present at the current event
			// currently, the url must be updated manually
			window.location.href = ATTENDANCE_URL;
			return null;
		},
	},
	{
		path: "/git-cheatsheet",
		articleProps: { source: "cheatsheets/git.md", title: "Git Cheatsheet" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/dev/docs/articles",
		articleProps: { source: "docs/articles.md", title: "Article Documentation" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/dev/docs/slidedecks",
		articleProps: { source: "docs/slidedecks.md", title: "Slide Deck Documentation" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/dev/docs/design",
		articleProps: { source: "docs/design.md", title: "Design Specification" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/dev/docs",
		articleProps: { source: "docs/README.md", title: "README" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/dev/components",
		Component: lazy(() =>
			import(/* webpackChunkName: "demo" */ "./views/ComponentsDemo/ComponentsDemo.js")
		),
	},
	{
		path: "/dev/slides/slide-deck",
		Component: lazy(() =>
			import(/* webpackChunkName: "demo" */ "./views/SlideDeckDemo/SlideDeckDemo.js")
		),
	},
	{
		path: "/dev/slides/quick-slides",
		slideProps: { slidePath: "example-slides.yaml", title: "Example" },
		Component: lazy(() =>
			import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/dev/slides/slide-names",
		slideProps: { slidePath: "slide-names.yaml", title: "Slide Names" },
		Component: lazy(() =>
			import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/event/pair-programming-2020",
		articleProps: { source: "events/2020-pair-programming.md", title: "Pair Programming 2020" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/bash-cheatsheet",
		articleProps: { source: "cheatsheets/bash.md", title: "Bash Cheatsheet" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/powershell-cheatsheet",
		articleProps: { source: "cheatsheets/powershell.md", title: "Powershell Cheatsheet" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/event/pimp-my-terminal",
		Component: lazy(() =>
			import(/* webpackChunkName: "pmt" */ "./views/PimpMyTerminal/PimpMyTerminal.js")
		),
	},
	{
		path: "/slides/gbm/fall-2020-welcome-back",
		Component: lazy(() =>
			import(/* webpackChunkName: "gbm1" */ "./views/Slides/fall-2020-gbm1/fall-2020-gbm1.js")
		),
	},
	{
		path: "/guide/open-source-fall-2020",
		articleProps: {
			source: "fall-2020-open-source-projects.md",
			title: "Open Source Project Guide - Fall 2020",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/install-wsl",
		articleProps: {
			source: "tutorials/howto-install-wsl.md",
			title: "How to Install the Windows Subsystem for Linux",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/enable-colors-mac",
		articleProps: {
			source: "tutorials/howto-enable-terminal-colors-mac.md",
			title: "How to Enable Terminal Colors on Mac",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/iterm2-import-colors",
		articleProps: {
			source: "tutorials/howto-install-iterm2-themes.md",
			title: "How to Install iTerm2 Color Themes",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/set-default-shell",
		articleProps: {
			source: "tutorials/howto-set-default-shell.md",
			title: "How to set the default shell",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/ensure-bashrc-profile-setup",
		articleProps: {
			source: "tutorials/howto-ensure-bashrc-profile-setup.md",
			title: "How to make sure your bashrc/profile is set up",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/cli-text-editors",
		articleProps: {
			source: "tutorials/howto-use-cli-text-editors.md",
			title: "How to use terminal text editors",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/vscode-theme",
		articleProps: {
			source: "tutorials/howto-vscode-set-theme.md",
			title: "How to set your theme in VS Code",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/tutorial/set-default-terminal",
		articleProps: {
			source: "tutorials/howto-set-default-terminal.md",
			title: "How to set your default terminal",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/event/ctc-intro-to-git-2020",
		articleProps: {
			source: "events/ctc-intro-to-git-2020/intro-to-git.md",
			title: "Intro to Git",
		},
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/guide/what-to-install",
		articleProps: { source: "guides/what-to-install.md", title: "What to install?" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/guide/github",
		articleProps: { source: "guides/github.md", title: "SEC's guide to GitHub" },
		Component: lazy(() =>
			import(/* webpackChunkName: "article" */ "./views/Article/Article.js")
		),
	},
	{
		path: "/slides/event/debugging-workshop",
		slideProps: { slidePath: "events/debugging-workshop.yaml" },
		Component: lazy(() =>
			import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "*",
		Component: lazy(() =>
			import(/* webpackChunkName: "not-found" */ "./views/NotFound/NotFound.jsx")
		),
	},
];

export default ROUTES;
