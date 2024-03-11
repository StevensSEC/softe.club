import "./EventBanner.scss";
import dayjs from "dayjs";
import * as SEC from "../SEC/lib.js";

interface EventBannerProps {
	flyerSource?: string;
	altText?: string;
	title?: string;
	desc: string;
	startDate: dayjs.Dayjs;
	endDate: dayjs.Dayjs;
	meetingLink?: string;
	isGbm?: boolean;
	now?: dayjs.Dayjs;
}

const EventBanner: React.FC<EventBannerProps> = (props) => {
	let now: dayjs.Dayjs = props.now ?? dayjs();

	let flyer = props.flyerSource ? require(`../../assets/flyers/${props.flyerSource}`) : null;
	let imageElement = flyer ? (
		<img
			loading="lazy"
			src={flyer.default}
			alt={
				props.altText
					? `${props.altText}`
					: `Flyer for ${props.title ? `${props.title} ` : ""}event`
			}
		/>
	) : null;

	let inProgress =
		props.startDate &&
		props.endDate &&
		props.startDate.isBefore(now) &&
		props.endDate.isAfter(now);

	if (
		(!props.endDate || now.isBefore(props.endDate)) &&
		(!props.startDate || !props.isGbm || props.startDate.subtract(7, "day").isBefore(now))
	) {
		return (
			<div className="club-event">
				<div
					className={["container", props.flyerSource ? "has-flyer" : "no-flyer"].join(
						" "
					)}
				>
					<div className="flyer">{imageElement}</div>
					<div className="text-container">
						<span className="title">{props.title}</span>
						<hr />
						<span className="start-time">
							{props.startDate
								? props.startDate.format("dddd, MMM. D, h:mm a")
								: null}
						</span>
						<span className="description">{props.desc}</span>
						{inProgress ? (
							<span className="in-progress">Happening right now!</span>
						) : null}
						{props.meetingLink ? (
							<span className="meeting-link">
								Join here:{" "}
								<SEC.Link href={props.meetingLink}>{props.meetingLink}</SEC.Link>
							</span>
						) : null}
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default EventBanner;
