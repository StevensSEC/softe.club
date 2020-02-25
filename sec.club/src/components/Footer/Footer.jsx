import React from "react"
import email from "../../assets/email.svg"
import instagram  from "../../assets/instagram.svg"
import groupme from "../../assets/groupme.svg"
import slack from "../../assets/slack.svg"
import github from "../../assets/github.png"
import Button from "../Button/Button"
import "./Footer.scss"

export default function Footer(){
    return (
        <div class="content-wrap">
        <footer class="footer">
            <Button to="https://www.instagram.com/secstevens/" kind="icon">
                <img src={instagram} alt="Icon for Instagram"/>
            </Button>
            <Button to="https://secstevens.slack.com" kind="icon">
                <img src={slack} alt="Icon for Slack"/>
            </Button>
            <Button to="https://web.groupme.com/join_group/47489910/Iw5HVV" kind="icon"> 
                <img src={groupme} alt="Icon for GroupMe"/>
            </Button>
            <Button to="https://lists.stevens.edu/mailman/listinfo/sec" kind="icon">
                <img src={email} alt="Icon for Email"/>
            </Button>
            <Button to="https://github.com/StevensSEC/" kind="icon">
                <img src={github} alt="Icon for Github"/>
            </Button>
        </footer>
        <div class="github">This website is open source! Check it out on the SEC <a href="https://github.com/StevensSEC/sec.club">Github</a></div>
        <div class="attr">Slack icon made by Pixel perfect from www.flaticon.com</div>
        <div class="attr">Email icon made by Those Icons from www.flaticon.com</div>
        </div>
    )
}