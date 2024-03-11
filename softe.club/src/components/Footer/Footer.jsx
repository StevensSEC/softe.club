import React from "react";
import email from "../../assets/email.svg";
import instagram from "../../assets/instagram.svg";
import groupme from "../../assets/groupme.svg";
import slack from "../../assets/slack.svg";
import github from "../../assets/github.png";
import discord from "../../assets/discord.svg";
import * as SEC from "../SEC/lib.js";
import "./Footer.scss";

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<SEC.Button to="https://discord.gg/nr3tqCfR2a" kind="icon">
					<img src={discord} alt="Icon for Discord" />
				</SEC.Button>
				<SEC.Button to="https://github.com/StevensSEC/" kind="icon">
					<img src={github} alt="Icon for Github" />
				</SEC.Button>
				<SEC.Button to="https://web.groupme.com/join_group/47489910/Iw5HVV" kind="icon">
					<img src={groupme} alt="Icon for GroupMe" />
				</SEC.Button>
				<SEC.Button to="https://secstevens.slack.com" kind="icon">
					<img src={slack} alt="Icon for Slack" />
				</SEC.Button>
				<SEC.Button to="https://lists.stevens.edu/mailman/listinfo/sec" kind="icon">
					<img src={email} alt="Icon for Email" />
				</SEC.Button>
				<SEC.Button to="https://www.instagram.com/secstevens/" kind="icon">
					<img src={instagram} alt="Icon for Instagram" />
				</SEC.Button>
			</footer>
			<div className="github">
				This website is open source! Check it out on the SEC{" "}
				<SEC.Link href="https://github.com/StevensSEC/softe.club">Github</SEC.Link>
			</div>
		</>
	);
}
