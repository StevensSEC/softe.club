import { lazy } from "react";
import type { ArticleViewProps } from "./views/Article/Article";

export interface Route {
	path: string;
	Component: React.FC<any>;
	articleProps?: ArticleViewProps | null;
	slideProps?: { slidePath: string; title?: string };
}

// attendance url is currently for GBM4
const ATTENDANCE_URL =
	"https://stevens.campuslabs.com/engage/event/7454437/attend?Vud=10/4/2021&Vut=02:00:00&Hash=nEPhqIZ9ReqzmHcNelqLHbkQOC0djBzPjfuNaJbinxK98cqZWK02FCwQ18PKn9b5CkBmyf8yJD6OptjzXcHxiHLwj5MjJkiqmIcUUn9DyG5AYmcndXwbmdJREcfTW8fCWmCtoSE-A7hQ6jMRr2oK1T45XaCYiZi2xThkpP__O_Z_eaaTnin18PqqwvcWJtqKxLjQmiHT29HdHq3JsxNlgCcQ_m94w_9yDLBHq7nJTGOsh8aIS6TB5FeGbZM7qpB5ZjebhV2z79cROtCE9aUhjuiBr8HLs_BLhllUpOQHSnKPoiKnApArgaDDtNy8Qd1Siq-VsqNtA1laWKdPbQSv-A";
export const ROUTES: Route[] = [
	{
		path: "/",
		articleProps: null,
		Component: lazy(() => import(/* webpackChunkName: "home" */ "./views/Home/Home")),
	},
	{
		path: "/slp",
		Component: lazy(() => import(/* webpackChunkName: "slp" */ "./views/SLP/SLP")),
	},
	{
		path: "/about",
		articleProps: { source: "about", title: "About" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/team",
		Component: lazy(() => import(/* webpackChunkName: "team" */ "./views/Team/Team")),
	},
	{
		path: "/contact",
		articleProps: { source: "contact", title: "Contact" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/resources",
		articleProps: { source: "guides/resources", title: "Resources" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/faq",
		articleProps: { source: "faq", title: "FAQ" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/recordings",
		Component: lazy(
			() => import(/* webpackChunkName: "recordings" */ "./views/Recordings/Recordings")
		),
	},
	{
		path: "/contributions",
		Component: lazy(
			() => import(/* webpackChunkName: "article" */ "./views/Contributions/Contributions")
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
		path: "/discord",
		Component: () => {
			window.location.href = "https://discord.gg/nr3tqCfR2a";
			return null;
		},
	},
	{
		path: "/gh-submit",
		Component: () => {
			// Form for submitting github usernames spring 2021
			window.location.href = "https://forms.gle/qQWBgAZy9gScAQi99";
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
		articleProps: { source: "cheatsheets/git", title: "Git Cheatsheet" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/dev/docs/articles",
		articleProps: { source: "docs/articles", title: "Article Documentation" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/dev/docs/slidedecks",
		articleProps: { source: "docs/slidedecks", title: "Slide Deck Documentation" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/dev/docs/design",
		articleProps: { source: "docs/design", title: "Design Specification" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/dev/docs",
		articleProps: { source: "docs/README", title: "README" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/dev/components",
		Component: lazy(
			() => import(/* webpackChunkName: "demo" */ "./views/ComponentsDemo/ComponentsDemo.js")
		),
	},
	{
		path: "/dev/slides/slide-deck",
		Component: lazy(
			() => import(/* webpackChunkName: "demo" */ "./views/SlideDeckDemo/SlideDeckDemo.js")
		),
	},
	{
		path: "/dev/slides/quick-slides",
		slideProps: { slidePath: "example-slides", title: "Example" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/dev/slides/slide-names",
		slideProps: { slidePath: "slide-names", title: "Slide Names" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/event/pair-programming-2020",
		articleProps: { source: "events/2020-pair-programming", title: "Pair Programming 2020" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/bash-cheatsheet",
		articleProps: { source: "cheatsheets/bash", title: "Bash Cheatsheet" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/powershell-cheatsheet",
		articleProps: { source: "cheatsheets/powershell", title: "Powershell Cheatsheet" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/event/pimp-my-terminal",
		Component: lazy(
			() => import(/* webpackChunkName: "pmt" */ "./views/PimpMyTerminal/PimpMyTerminal")
		),
	},
	{
		path: "/slides/gbm/fall-2020-welcome-back",
		Component: lazy(
			() =>
				import(
					/* webpackChunkName: "gbm1" */ "./views/Slides/fall-2020-gbm1/fall-2020-gbm1"
				)
		),
	},
	{
		path: "/guide/open-source-fall-2020",
		articleProps: {
			source: "fall-2020-open-source-projects",
			title: "Open Source Project Guide - Fall 2020",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/install-wsl",
		articleProps: {
			source: "tutorials/howto-install-wsl",
			title: "How to Install the Windows Subsystem for Linux",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/enable-colors-mac",
		articleProps: {
			source: "tutorials/howto-enable-terminal-colors-mac",
			title: "How to Enable Terminal Colors on Mac",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/iterm2-import-colors",
		articleProps: {
			source: "tutorials/howto-install-iterm2-themes",
			title: "How to Install iTerm2 Color Themes",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/set-default-shell",
		articleProps: {
			source: "tutorials/howto-set-default-shell",
			title: "How to set the default shell",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/ensure-bashrc-profile-setup",
		articleProps: {
			source: "tutorials/howto-ensure-bashrc-profile-setup",
			title: "How to make sure your bashrc/profile is set up",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/cli-text-editors",
		articleProps: {
			source: "tutorials/howto-use-cli-text-editors",
			title: "How to use terminal text editors",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/vscode-theme",
		articleProps: {
			source: "tutorials/howto-vscode-set-theme",
			title: "How to set your theme in VS Code",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/set-default-terminal",
		articleProps: {
			source: "tutorials/howto-set-default-terminal",
			title: "How to set your default terminal",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/tutorial/windows-terminal",
		articleProps: {
			source: "tutorials/howto-install-use-windows-terminal",
			title: "How to install and use Windows Terminal",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/event/ctc-intro-to-git-2020",
		articleProps: {
			source: "events/ctc-intro-to-git-2020/intro-to-git",
			title: "Intro to Git",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/guide/what-to-install",
		articleProps: { source: "guides/what-to-install", title: "What to install?" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/guide/github",
		articleProps: { source: "guides/github", title: "SEC's guide to GitHub" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/slides/event/debugging-workshop",
		slideProps: { slidePath: "events/debugging-workshop" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/slides/event/rust-workshop",
		slideProps: { slidePath: "events/rust-workshop" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/slides/spring-2021-gbm1",
		slideProps: { slidePath: "spring-2021-gbm1" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/slides/fall-2022-learnhack",
		slideProps: { slidePath: "fall-2022-learnhack" },
		Component: lazy(
			() => import(/*webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/slides/spring-2021-learnhack",
		slideProps: { slidePath: "spring-2021-learnhack" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/events/pair-programming-s21",
		articleProps: { source: "events/pair-programming-s21", title: "Pair Programming 2021" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/slides/events/pair-programming-s21",
		slideProps: { slidePath: "events/pair-programming-s21" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/events/pair-programming-s22-solutions",
		articleProps: {
			source: "events/2022-pair-programming-sol",
			title: "Pair Programming 2022 Solutions",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/slides/events/pair-programming-s22",
		slideProps: { slidePath: "events/pair-programming-s22" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/slides/events/react-native-expo-workshop",
		slideProps: { slidePath: "events/react-native-expo-workshop" },
		Component: lazy(
			() => import(/* webpackChunkName: "quick-slides" */ "./views/Slides/QuickSlides.js")
		),
	},
	{
		path: "/events/react-native-expo-workshop",
		articleProps: {
			source: "events/react-native-expo-workshop",
			title: "React Native & Expo Workshop",
		},
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/guide/tools",
		articleProps: { source: "guides/tools", title: "Tools" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "/guide/code-reviews",
		articleProps: { source: "guides/code-reviews", title: "SEC's guide to code reviews" },
		Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article")),
	},
	{
		path: "*",
		Component: lazy(
			() => import(/* webpackChunkName: "not-found" */ "./views/NotFound/NotFound")
		),
	},
];

export default ROUTES;
