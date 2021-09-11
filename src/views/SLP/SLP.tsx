import React from "react";
import  { Container } from "@material-ui/core";
import PROJECTS from "./Projects";
import { Orientation } from "./SLPComponent";
import SLP from "./SLPComponent";

const SLPView = () : JSX.Element => {
	const getNextOrientation = (ori : Orientation) : Orientation => {
		return ori === "left" ? "right" : "left";
	}
	let orientation : Orientation = "right";
	return (
		<div>
			<Container>
				<h1>Here you can view a history of SEC's projects...</h1>
			</Container>
			{PROJECTS.map((project) => {
				orientation = getNextOrientation(orientation)
				return (
					<SLP
						orientation={orientation}
						imgSource={project.img}
						textSource={project.markdown}
						name={project.name}/>
				)
			})}
		</div>
	);
};

export default SLPView;
