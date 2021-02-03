import React from "react";
import "./EventBanner.scss";
import dayjs from "dayjs";
import * as SEC from "../SEC/lib.js";

export default function EventBanner({
	flyerSource,
	altText,
	title,
	desc,
	startDate,
	endDate,
	meetingLink,
	isGbm,
	now = dayjs(),
}) {
	let flyer = flyerSource ? require(`../../assets/flyers/${flyerSource}`) : null;
	let imageElement = flyer ? (
		<img
			loading="lazy"
			src={flyer.default}
			alt={altText ? `${altText}` : `Flyer for ${title ? `${title} ` : ""}event`}
		/>
	) : null;

	let inProgress = startDate && endDate && startDate.isBefore(now) && endDate.isAfter(now);

	if (
		(!endDate || now.isBefore(endDate)) &&
		(!startDate || !isGbm || startDate.subtract(7, "day").isBefore(now))
	) {
		return (
			<div className="club-event">
				<div className={["container", flyerSource ? "has-flyer" : "no-flyer"].join(" ")}>
					<div className="flyer">{imageElement}</div>
					<div className="text-container">
						<span className="title">{title}</span>
						<hr />
						<span className="start-time">
							{startDate ? startDate.format("dddd, MMM. D, h:mm a") : null}
						</span>
						<span className="description">{desc}</span>
						{inProgress ? (
							<span className="in-progress">Happening right now!</span>
						) : null}
						{meetingLink ? (
							<span className="meeting-link">
								Join here: <SEC.Link href={meetingLink}>{meetingLink}</SEC.Link>
							</span>
						) : null}
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
}
