import React from "react";
import "./ProjectWall.scss";
import { Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import * as SEC from "../SEC/lib.js";
import PROJECTS from "../../views/SLP/Projects";

const Project = ({ project, className, onClick }) => (
	<SEC.Button
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
	</SEC.Button>
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
			<SEC.Button kind="icon" className="mobile" onClick={toggleDrawer("top", true)}>
				<MenuIcon />
			</SEC.Button>
			{PROJECTS.map((project, index) => (
				<Project project={project} key={`project-${index}`} />
			))}
			<Drawer anchor="top" open={state.top} onClose={toggleDrawer("top", false)}>
				<SEC.Button
					kind="icon"
					onClick={toggleDrawer("top", false)}
					style={{ width: "24px", margin: "4px" }}
				>
					<CloseIcon />
				</SEC.Button>
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
