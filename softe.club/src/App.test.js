import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ROUTES from "./Router.js";
import EVENTS from "./Events";
import fs from "fs";

expect.extend({
	pathToExist(path) {
		if (fs.existsSync(path)) {
			return {
				message: () => `File ${path} should NOT exist`,
				pass: true,
			};
		} else {
			return {
				message: () => `File ${path} should exist`,
				pass: false,
			};
		}
	},
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<App />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

describe("Article route metadata", () => {
	it("should have a markdown file for each article route", () => {
		for (const route of ROUTES) {
			if (route.articleProps) {
				expect(`./src/articles/${route.articleProps.source}`).pathToExist();
			}
		}
	});

	it("should have a yaml file for all quick slides", () => {
		for (const route of ROUTES) {
			if (route.slideProps) {
				expect(`./src/slides/${route.slideProps.slidePath}`).pathToExist();
			}
		}
	});

	it("should have all routes with slide decks start with /slides", () => {
		let match = expect.stringMatching(/^(\/dev)?\/slides/);
		for (const route of ROUTES) {
			if (route.slideProps) {
				expect(route.path).toEqual(match);
			}
		}
	});
});

describe("Event metadata", () => {
	it("image for event flyer should exist (when provided)", () => {
		for (const event of EVENTS) {
			if (event.flyerSource) {
				expect(`./src/assets/flyers/${event.flyerSource}`).pathToExist();
			}
		}
	});

	it("should have end date come after start date (when provided)", () => {
		for (const event of EVENTS) {
			if (event.startDate && event.endDate) {
				expect(event.startDate.isBefore(event.endDate)).toEqual(true);
			}
		}
	});
});
