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
 * @param {Number} countOffset GBM number offset
 */
function generateGbms(startDate, endDate, countOffset = 0, limit = 10) {
	let date = startDate.day(4); // next thursday
	let count = countOffset;
	limit += countOffset;
	let gbms = [];

	while (date.isBefore(endDate) && count < limit) {
		gbms.push({
			flyerSource: `GBM${count}.png`,
			title: `GBM ${count}`,
			desc: `Come code with us! We'll help you contribute to any open source project you want! Starting at 8:30 pm on ${date.format(
				"MMM. D"
			)} (Come at 9 if you have class until then).`,
			meetingLink: "https://stevens.zoom.us/j/95304643871",
			startDate: date.hour(20).minute(30),
			endDate: date.hour(21).minute(30),
			isGbm: true,
		});
		count++;
		date = date.add(1, "week");
	}
	return gbms;
}

const EVENTS = [
	{
		flyerSource: "debugging-workshop.png",
		title: "Debugging Workshop",
		desc:
			"Sometimes, you make logic errors when writing code. Everybody does. You've probably written a few print statements to help you debug. But sometimes, print statement debugging doesn't cut it. Take your debugging to the next level with this workshop! In this workshop, you'll learn how to use VSCode's debugging interface, and use it to debug Python and C++.",
		startDate: dayjs(new Date("October 21, 2020")).hour(21),
		endDate: dayjs(new Date("October 21, 2020")).hour(22),
		meetingLink: "https://stevens.zoom.us/j/98637599692",
	},
	{
		flyerSource: "Become-a-Rustacean.png",
		title: "Rust Workshop",
		desc:
			"Have you heard of Rust, but you aren't sure where to get started? This is the workshop for you! Rust is a systems programming language with guarenteed memory safety and no garbage collection. These are great for performance, but make it really hard to get a hold of at first. In this workshop, you'll learn how to apply your existing programming knowledge to deal with Rust's ownership model.",
		startDate: dayjs(new Date("November 19, 2020")).hour(21),
		endDate: dayjs(new Date("November 19, 2020")).hour(22),
		meetingLink: "https://stevens.zoom.us/j/91445524026",
	},
	{
		flyerSource: "Pimp my terminal.png",
		title: "Pimp My Terminal",
		desc:
			"Come learn how to make your developing process look pretty by decking out your VSCode and your terminal.",
		startDate: dayjs(new Date("January 27, 2021")).hour(21),
		endDate: dayjs(new Date("January 27, 2021")).hour(22),
	},
].concat(generateGbms(dayjs("2020-12-3", "YYYY-MM-DD"), dayjs("2020-12-10", "YYYY-MM-DD"), 9));

export default EVENTS;
