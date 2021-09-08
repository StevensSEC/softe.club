import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.scss";
import * as SEC from "../SEC/lib.js";
import { UxContext } from "../../contexts.js";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

const Header = () => {
	const ux = React.useContext(UxContext);

	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (side, open) => event => {
		//Extra key navigation functionality
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [side]: open });
	};
	const buttonRoutes = [
		{
			title: "What is SEC?",
			route: "/about",
		},
		{
			title: "Semester Long Project",
			route: "/slp",
		},
		{
			title: "Meet the Team",
			route: "/team",
		},
		{
			title: "Resources",
			route: "/resources",
		},
		{
			title: "Contact",
			route: "/contact",
		},
		{
			title: "FAQ",
			route: "/faq",
		},
	];
	const moreRoutes = [
		{
			title: "Pimp My Terminal",
			route: "/event/pimp-my-terminal",
		},
		{
			title: "Tools",
			route: "/guide/tools",
		},
		{
			title: "Recordings",
			route: "/recordings",
		},
		{
			title: "Contributions",
			route: "/contributions",
		}
	];
	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{buttonRoutes.map((button, index) => (
					<SEC.Button
						className="drawer-item"
						kind="menu"
						to={button.route}
						key={`menuItem-${index}`}
					>
						{button.title}
					</SEC.Button>
				))}
				{moreRoutes.map((button, index) => (
					<SEC.Button
						className="drawer-item"
						kind="menu"
						to={button.route}
						key={`menuItem-${index + buttonRoutes.length}`}
					>
						{button.title}
					</SEC.Button>
				))}
			</List>
		</div>
	);

	const MenuButton = () => (
		<SEC.Button kind="icon" className="mobile" onClick={toggleDrawer("left", true)}>
			<MenuIcon />
		</SEC.Button>
	);

	if (ux.headerCompact) {
		return (
			<header className="sec-header compact">
				<MenuButton />
				<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
					{sideList("left")}
				</Drawer>
			</header>
		);
	} else {
		return (
			<header className="sec-header">
				<div className="header-content">
					<Hidden mdUp>
						<MenuButton />
					</Hidden>
					<SEC.Button kind="menu" className="barLogo" to={"/"} key={"menuItem-home"}>
						SEC
					</SEC.Button>
					<Hidden smDown>
						<div className="header-items">
							{buttonRoutes.map((button, index) => (
								<SEC.Button kind="menu" to={button.route} key={`menuItem-${index}`}>
									{button.title}
								</SEC.Button>
							))}
							<SEC.Button kind="menu" onClick={toggleDrawer("left", true)}>
								More
							</SEC.Button>
						</div>
					</Hidden>
					<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
						{sideList("left")}
					</Drawer>
				</div>
			</header>
		);
	}
};
export default Header;
