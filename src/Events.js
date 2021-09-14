/*
Adding an event to the site:

1. Upload a picture or flyer for the event and add it to /assets/flyers.
2. Add an object to the EVENTS list of this format:
    {
        flyerSource: [name_of_uploaded_picture],
        altText: [some_alt_text_for_the_picture],
        title: [name_of_event],
        desc: [A brief description of the event],
        meetingLink: [(optional) link to an online meeting]
        endDate: new Date([the day the you want this event to stop showing on the home page])
    }

The altText property is optional if you don't want to set custom altText for the flyer.
The endDate property is optional if you don't want an event to go away for a long time.

*/

import dayjs from "dayjs";

/**
 * Generate gbm events. All flyers for these events must be present in src/assets/flyers, otherwise this will fail.
 * @param {dayjs} startDate Date at which to start generating.
 * @param {dayjs} endDate Date at which to stop generating.
 * @param {Number} countOffset GBM number offset. The first GBM generated will have this number.
 * @param {Number} limit Limit the maximum number of gbm events that are generated.
 */
function generateGbms(startDate, endDate, countOffset = 1, limit = 10) {
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
}

const EVENTS = generateGbms(
	dayjs("2021-9-9", "YYYY-MM-DD"),
	dayjs("2021-30-09", "YYYY-MM-DD"),
	1,
	4
);
// .concat([
// 	{
// 		flyerSource: "learnhack_2021f.png",
// 		title: "LearnHack",
// 		desc: "Learn more about git, Javascript, and developing in React Native.",
// 		meetingLink: "https://stevens.zoom.us/j/98789531305",
// 		startDate: dayjs("2021-9-18", "YYYY-MM-DD").hour(12),
// 		endDate: ddayjs("2021-9-18", "YYYY-MM-DD").hour(14)
// 	}
// ])
// .concat(generateGbms(dayjs("2021-10-7", "YYYY-MM-DD"), dayjs("2021-11-18", "YYYY-MM-DD")), 5)
// .concat(generateGbms(dayjs("2021-12-2", "YYYY-MM-DD"), dayjs("2021-12-9", "YYYY-MM-DD")), 12)
export default EVENTS;
