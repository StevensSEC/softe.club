import React, { Component } from "react"
import { Container, Grid } from "@material-ui/core";

import "./Team.scss"

export default class TeamView extends Component{

    eboardList = [
        {
            role: "President",
            name: "Carson McManus",
            desc: "In charge of the club's direction; guides each member to realize their potential in software engineering.",
            img: "carson.png",
            github: "https://github.com/dyc3",
        },
        {
            role: "Vice President",
            name: "Sarah Wiessler",
            desc: "Provides additional direction to the club; manages the tasks of each member on the e-board.",
            img: "sarah.png",
            github: "https://github.com/SWiessler",
        },
        {
            role: "Treasurer",
            name: "David Carpenter",
            desc: "Responsible for club finance, budgets and makes purchases on behalf of the club.",
            img: "david.jpeg",
            github: "https://github.com/carpenterd777",
        },
        {
            role: "Secretary",
            name: "Adrian Garcia",
            desc: "Disseminates information; responsible for notifying members of events and opportunities!",
            img: "adrian.jpeg",
            github: "https://github.com/adrian-d-garcia",
        },
        {
            role: "Logistics Chair",
            name: "Abdullah Hyder",
            desc: "Event organizer; ensures club events have a venue.",
            img: "user.jpg",
            github: "https://github.com/abdullahhyder",
        },
        {
            role: "Marketing Chair",
            name: "Anjali Paliwal",
            desc: "Shows off the fun we have at each event by sharing photos on Instagram and GroupMe!",
            img: "user.jpg",
            github: "https://github.com/grinchpal",
        }
    ]

    memberList = [
        {
            name: "Adam Papenhausen",
            github: "https://github.com/adapap"
        }
    ]

    render(){
        this.eboardList = this.eboardList.map(member => {
            member.img = require(`../../assets/profiles/${member.img}`).default
            return member
        })

        return (
        <div>
            <Container>
                <h1>Executive Board</h1>
                <Grid container>
                    {this.eboardList.map((member, index) => {
                        return (
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <Grid item key={"profile-" + index} className="profile">
                                <img src={member.img} alt={member.name}/>
                                <h2>{member.name}</h2>
                                <div className="role">{member.role}</div>
                                <div className="desc">{member.desc}</div>
                            </Grid>
                        </a>
                        )
                    })}
                </Grid>
                <h1>Club Members</h1>
                <div className="contrib-header">
                    Contributors to the Semester Long Project are added here.
                </div>
                <ul>
                    {this.memberList.map(member => {
                        return <li><a href={member.github}>{member.name}</a></li>
                    })}
                </ul>
            </Container>
        </div>
        )
    }

}