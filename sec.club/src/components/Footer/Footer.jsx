import React from "react"
import groupme from "../../assets/groupme.svg"
import "./Footer.scss"

export default function Footer(){
    return (
        <div class="footer">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/v4-shims.css"/>
            <a href="https://www.instagram.com/secstevens/?utm_source=ig_profile_share&igshid=11oehey6qskqx">
                <i class="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://secstevens.slack.com">
                <i class="fab fa-slack fa-3x"></i></a>
            <a href="https://web.groupme.com/join_group/47489910/Iw5HVV">
                <img src={groupme} alt="Icon for GroupMe"></img>
            </a>
            <a href="https://lists.stevens.edu/mailman/listinfo/sec">
                <i class="fas fa-envelope fa-3x"></i>
            </a>
        </div>
    )
}