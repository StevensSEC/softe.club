import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import * as SEC from "../../components/SEC/lib.js";

import "./Team.scss";

export default class TeamView extends Component {
	eboardList = [
		{
			role: "President",
			name: "David Carpenter",
			img: "david.jpg",
			github: "carpenterd777",
		},
		{
			role: "Vice President",
			name: "Anjali Paliwal",
			img: "anjali.jpg",
			github: "grinchpal",
		},
		{
			role: "Treasurer",
			name: "Adrian Garcia",
			img: "adrian.jpeg",
			github: "adriang11",
		},
		{
			role: "Secretary",
			name: "Sabrina Vuong",
			img: "sabrina.jpg",
			github: "svuong959",
		},
		{
			role: "Logistics Chair",
			name: "Rishabh Dhadda",
			img: "user.jpg",
			github: "rdhadda123",
		},
		{
			role: "Marketing Chair",
			name: "Kristin Kim",
			img: "kristin.jpg",
			github: "krixstin",
		},
	];

	//TODO: automate list of members in the general body
	memberList = [];

	render() {
		this.eboardList = this.eboardList.map(member => {
			member.img = require(`../../assets/profiles/${member.img}`).default;
			return member;
		});

		return (
			<Container className="team-page">
				<h1>Executive Board</h1>
				<Grid container>
					{this.eboardList.map((member, index) => {
						return (
							<Grid item key={"profile-" + index} className="profile">
								<SEC.Link
									href={`https://github.com/${member.github}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={member.img} alt={member.name} />
									<h2>{member.name}</h2>
									<div className="role">{member.role}</div>
								</SEC.Link>
							</Grid>
						);
					})}
				</Grid>
				<h1>Club Members</h1>
				<div className="contrib-header">
					Contributors to the Semester Long Project are added here.
				</div>
				<ul>
					{this.memberList.map(member => {
						return (
							<li>
								<SEC.Link href={`https://github.com/${member.github}`}>
									{member.name}
								</SEC.Link>
							</li>
						);
					})}
				</ul>
			</Container>
		);
	}
}
