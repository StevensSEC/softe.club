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
			flyerSource: `GBM${count}.png`,
			title: `GBM ${count}`,
			desc: `Like coding AND Pokemon? This semester's project is perfect for you! We're making a Pokemon Battle Library in Go! Starting at 9 pm on ${date.format(
				"MMM. D"
			)}`,
			meetingLink: "https://stevens.zoom.us/j/93021320820",
			startDate: date.hour(21),
			endDate: date.hour(22),
			isGbm: true,
		});
		count++;
		date = date.add(1, "week");
	}
	return gbms;
}

const EVENTS = generateGbms(dayjs("2021-2-4", "YYYY-MM-DD"), dayjs("2021-2-11", "YYYY-MM-DD"), 1, 1)
	.concat([
		{
			flyerSource: "learnHack-GO.png",
			title: "learnHack GO",
			desc:
				"Don't know Go? Haven't even heard of Go? It doesn't matter, we'll teach you! Perfect for anybody who wants to contribute to the Pokemon battle library.",
			meetingLink: "https://stevens.zoom.us/j/93021320820",
			startDate: dayjs("2021-2-6", "YYYY-MM-DD").hour(13),
			endDate: dayjs("2021-2-6", "YYYY-MM-DD").hour(16),
		},
	])
	.concat(generateGbms(dayjs("2021-2-11", "YYYY-MM-DD"), dayjs("2021-3-4", "YYYY-MM-DD"), 2, 1))
	.concat([
		{
			flyerSource: "pair-programming.png",
			title: "Pair Programming",
			desc:
				"Grab your Valentine or make a new friend and bond by solving fun coding challenges together at our sweetest annual event!",
			meetingLink: "https://stevens.zoom.us/j/93021320820",
			startDate: dayjs("2021-2-12", "YYYY-MM-DD").hour(21),
			endDate: dayjs("2021-2-12", "YYYY-MM-DD").hour(22),
		},
	])
	.concat(generateGbms(dayjs("2021-2-18", "YYYY-MM-DD"), dayjs("2021-3-4", "YYYY-MM-DD"), 3))
	.concat([
		// TODO: add ren'py workshop here
	])
	.concat(generateGbms(dayjs("2021-3-11", "YYYY-MM-DD"), dayjs("2021-3-19", "YYYY-MM-DD"), 5))
	.concat([
		// TODO: update this pimp my terminal event with new flyer and metadata for 2021
		// {
		// 	flyerSource: "Pimp my terminal.png",
		// 	title: "Pimp My Terminal",
		// 	desc:
		// 		"Come learn how to make your developing process look pretty by decking out your VSCode and your terminal.",
		// 	startDate: dayjs(new Date("January 27, 2021")).hour(21),
		// 	endDate: dayjs(new Date("January 27, 2021")).hour(22),
		// },
	])
	.concat(generateGbms(dayjs("2021-4-8", "YYYY-MM-DD"), dayjs("2021-5-6", "YYYY-MM-DD"), 7))
	.concat([
		{
			flyerSource: "RenPy-Workshop.png",
			title: "Ren'Py Workshop",
			desc:
				"Learn how to create a visual novel in this fun and easy workshop! Hope to see you there.",
			meetingLink: "https://stevens.zoom.us/j/93021320820",
			startDate: dayjs("2021-3-4", "YYYY-MM-DD").hour(21),
			endDate: dayjs("2021-3-4", "YYYY-MM-DD").hour(22),
		},
	]);

export default EVENTS;
