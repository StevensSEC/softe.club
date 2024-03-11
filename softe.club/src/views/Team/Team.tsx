import { Component, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import * as SEC from "../../components/SEC/lib";

const images = import.meta.glob("../../assets/profiles/*.(png|jpg)", { eager: true });

import "./Team.scss";

export interface ClubMember {
	name: string;
	img: string;
	github: string;
}

export interface EboardMember extends ClubMember {
	role: string;
}

export default class TeamView extends Component {
	eboardList: EboardMember[] = [
		{
			role: "President",
			name: "Lauren Kibalo",
			img: "Lauren.jpg",
			github: "Lauren130",
		},
		{
			role: "Vice President",
			name: "Sean Hicks",
			img: "sean.jpg",
			github: "TheShicksinator",
		},
		{
			role: "Treasurer",
			name: "Mohammad Khan",
			img: "mohammad.png",
			github: "MHKhan18",
		},
		{
			role: "Secretary",
			name: "Joshua Gorman",
			img: "joshua.jpg",
			github: "endevii",
		},
		{
			role: "Logistics Chair",
			name: "Chris Opsal",
			img: "user.jpg",
			github: "copsal",
		},
		{
			role: "Marketing Chair",
			name: "Nico Savatta",
			img: "user.jpg",
			github: "nsavatta",
		},
	];

	//TODO: automate list of members in the general body
	memberList: ClubMember[] = [];

	render() {
		console.log(images);
		const eboardList = this.eboardList.map(member => {
			console.log(`../../assets/profiles/${member.img}`);
			member = {
				...member,
				img: images[`../../assets/profiles/${member.img}`].default,
			};
			return member;
		});

		return (
			<Container className="team-page">
				<h1>Executive Board</h1>
				<Grid container>
					{eboardList.map((member, index) => {
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
					{this.memberList.map((member, i) => {
						return (
							<li key={i}>
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
