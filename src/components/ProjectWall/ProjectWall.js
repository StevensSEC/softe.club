import React from "react";
import "./ProjectWall.scss";
import { NavLink } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button/Button.js";
import PROJECTS from "../../views/SLP/Projects";

const Project = ({ project, className, onClick }) => (
	<NavLink
		kind="menu"
		to={`/slp/${project.path}`}
		className={`project${className ? " " + className : ""}`}
		activeClassName="active"
		onClick={onClick}
	>
		<div className="img-container">
			<img src={project.img} alt={`Logo for ${project.name}`} />
		</div>
		<div className="name">
			<span>{project.name}</span>
			<span>{`${project.semester} ${project.year}`}</span>
		</div>
	</NavLink>
);

const ProjectWall = () => {
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

	return (
		<div className="project-wall">
			<Button kind="icon" className="mobile" onClick={toggleDrawer("top", true)}>
				<MenuIcon />
			</Button>
			{PROJECTS.map((project, index) => (
				<Project project={project} key={`project-${index}`} />
			))}
			<Drawer anchor="top" open={state.top} onClose={toggleDrawer("top", false)}>
				<Button
					kind="icon"
					onClick={toggleDrawer("top", false)}
					style={{ width: "24px", margin: "4px" }}
				>
					<CloseIcon />
				</Button>
				{PROJECTS.map((project, index) => (
					<Project
						project={project}
						className="drawer-item"
						key={`project-${index}`}
						onClick={toggleDrawer("top", false)}
					/>
				))}
			</Drawer>
		</div>
	);
};
export default ProjectWall;
