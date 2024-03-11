import React from "react";
import { List, ListItem } from "@material-ui/core";
import ROUTES from "../../Router";
import * as SEC from "../SEC/lib.js";
import "./ArticleList.scss";

export default function ArticleList() {
	return (
		<div className="article-list">
			<h1>Read Our Articles</h1>
			<List>
				{ROUTES.filter(x => x.hasOwnProperty("articleProps") && !!x.articleProps).map(x => (
					<ListItem key={x.path}>
						<SEC.Link href={x.path}>{x.articleProps.title}</SEC.Link>
					</ListItem>
				))}
			</List>
		</div>
	);
}
