import React from "react"
import email from "../../assets/email.svg"
import instagram  from "../../assets/instagram.svg"
import groupme from "../../assets/groupme.svg"
import slack from "../../assets/slack.svg"
import Button from "../Button/Button"
import "./Footer.scss"

export default function Footer(){
    return (
        <>
        <div class="footer">
            <Button to="https://www.instagram.com/secstevens/" kind="icon" className="icon-button">
                <img src={instagram} alt="Icon for Instagram"/>
            </Button>
            <Button to="https://secstevens.slack.com" kind="icon" className="icon-button">
                <img src={slack} alt="Icon for Slack"/>
            </Button>
            <Button to="https://web.groupme.com/join_group/47489910/Iw5HVV" kind="icon" className="icon-button"> 
                <img src={groupme} alt="Icon for GroupMe"/>
            </Button>
            <Button to="https://lists.stevens.edu/mailman/listinfo/sec" kind="icon" className="icon-button">
                <img src={email} alt="Icon for Email"/>
            </Button>
        </div>
        <div class="github">This website is open source! Check it out on the SEC <a href="https://github.com/StevensSEC/">Github</a></div>
        <div class="attr">Slack icon made by Pixel perfect from www.flaticon.com</div>
        <div class="attr">Email icon made by Those Icons from www.flaticon.com</div>
        </>
    )
}