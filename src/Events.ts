import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

interface SECEvent {
	flyerSource: string; // name of uploaded picture
	altText?: string; // alt text for accessibility
	title: string; // name of event
	desc: string; // brief description of event
	meetingLink?: string; // link to an online meeting
	startDate: Dayjs; // time event begins
	endDate?: Dayjs; // time event ends
}

/**
 * Generate gbm events. All flyers for these events must be present in src/assets/flyers, otherwise this will fail.
 * @param {dayjs} startDate Date at which to start generating.
 * @param {dayjs} endDate Date at which to stop generating.
 * @param {Number} countOffset GBM number offset. The first GBM generated will have this number.
 * @param {Number} limit Limit the maximum number of gbm events that are generated.
 */
const generateGbms = (
	startDate: Dayjs,
	endDate: Dayjs,
	countOffset = 1,
	limit = 10
): Array<SECEvent> => {
	if (endDate.isBefore(startDate)) {
		throw new Error(`endDate ${endDate} is before startDate ${startDate}`);
	}
	let date = startDate.day(4); // next thursday
	let count = countOffset;
	limit += countOffset;
	let gbms = [];

	while (date.isBefore(endDate) && count < limit) {
		gbms.push({
			flyerSource: `GBM${count}2021F.png`,
			title: `GBM ${count}`,
			desc: `Come join us as we construct a mobile app that can pull text from images. Starting at 9:00 pm on ${date.format(
				"MMM. D"
			)}`,
			meetingLink: "https://discord.gg/nr3tqCfR2a",
			startDate: date.hour(21),
			endDate: date.hour(22),
			isGbm: true,
		});
		count++;
		date = date.add(1, "week");
	}
	return gbms;
};

const EVENTS = generateGbms(
	dayjs("2021-9-9", "YYYY-MM-DD"),
	dayjs("2021-30-09", "YYYY-MM-DD"),
	1,
	4
).concat([
	{
		flyerSource: "learnhack_2021f.png",
		title: "learnHack",
		desc: "Learn more about git, Javascript, and developing in React.",
		meetingLink: "https://discord.gg/nr3tqCfR2a",
		startDate: dayjs("2021-9-29", "YYYY-MM-DD").hour(15),
		endDate: dayjs("2021-9-29", "YYYY-MM-DD").hour(17),
	},
]);
// .concat(generateGbms(dayjs("2021-10-7", "YYYY-MM-DD"), dayjs("2021-11-18", "YYYY-MM-DD")), 5)
// .concat(generateGbms(dayjs("2021-12-2", "YYYY-MM-DD"), dayjs("2021-12-9", "YYYY-MM-DD")), 12)
export default EVENTS;
