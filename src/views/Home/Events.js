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

const EVENTS = [
    {
        flyerSource: 'Pimp my terminal.png',
        title: 'Pimp My Terminal',
        desc: 'Come learn how to make your developing process look pretty by decking out your VSCode and your terminal. Altorfer Software Engineering Lab, March 5th, 9 PM',
        endDate: new Date('March 6, 2020'),
    },
    {
        flyerSource: 'GBM1.png',
        title: 'Welcome back!',
        desc: "Come code with us! We'll help you contribute to any open source project you want! Starting at 8:30 pm on Sep. 10 (Come at 9 if you have class until then).",
        meetingLink: 'https://meet.google.com/ujr-zxxe-idr',
        endDate: new Date('September 11, 2020'),
    },
    {
        flyerSource: 'GBM2.png',
        title: "GBM 2",
        desc: "Come code with us! We'll help you contribute to any open source project you want! Starting at 8:30 pm on Sep. 10 (Come at 9 if you have class until then).",
        meetingLink: "https://stevens.zoom.us/j/96916277431",
        endDate: new Date('September 18, 2020'),
    },
]

export default EVENTS;
