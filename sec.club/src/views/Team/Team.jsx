import React, { Component } from "react"
import { Container, Grid } from "@material-ui/core";

import "./Team.scss"

export default class TeamView extends Component{

    eboardList = [
        {
            role: "President",
            name: "Carson McManus",
            img: "carson.png",
            github: "dyc3",
        },
        {
            role: "Vice President",
            name: "Sarah Wiessler",
            img: "sarah.png",
            github: "SWiessler",
        },
        {
            role: "Treasurer",
            name: "David Carpenter",
            img: "david.jpeg",
            github: "carpenterd777",
        },
        {
            role: "Secretary",
            name: "Adrian Garcia",
            img: "adrian.jpeg",
            github: "adriang11",
        },
        {
            role: "Logistics Chair",
            name: "Abdullah Hyder",
            img: "user.jpg",
            github: "abdullahhyder",
        },
        {
            role: "Marketing Chair",
            name: "Anjali Paliwal",
            img: "user.jpg",
            github: "grinchpal",
        }
    ]

    memberList = [
        {
            name: "Adam Papenhausen",
            github: "adapap"
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
                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                            <Grid item key={"profile-" + index} className="profile">
                                <img src={member.img} alt={member.name}/>
                                <h2>{member.name}</h2>
                                <div className="role">{member.role}</div>
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
                        return <li><a href={`https://github.com/${member.github}`}>{member.name}</a></li>
                    })}
                </ul>
            </Container>
        </div>
        )
    }

}
