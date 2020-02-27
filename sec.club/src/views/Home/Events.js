/*
Adding an event to the site:

1. Upload a picture or flyer for the event and add it to /assets/flyers.
2. Add an object to the EVENTS list of this format:
    {
        flyerSource: [name_of_uploaded_picture],
        altText: [some_alt_text_for_the_picture],
        title: [name_of_event],
        desc: [A brief description of the event],
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
        endDate: new Date('March 5, 2020'),
    }
]

export default EVENTS;