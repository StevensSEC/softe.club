import React from "react";
import * as SEC from "../../components/SEC/lib.js";
import { List, ListItem, Container } from "@material-ui/core";

const RecordingsView: React.FC<any> = () => {
	return (
		<Container>
			<h3>Here are some recordings for events related to past SLPs.</h3>
			<List>
				<ListItem>
					<SEC.Button to="https://stevens.zoom.us/rec/share/IJUVzOG3fr8FVdPcAgn47WP75X_pRR16ctlizTbVK6fTW2bUVhoFeJbUCHWkQh69.W3iIJGE1KL8vwO_T?startTime=1612490724000">
						Spring 2021 GBM 1 - Welcome back and pokemonbattlelib introduction
					</SEC.Button>
				</ListItem>
				<ListItem>
					<SEC.Button to="https://stevens.zoom.us/rec/share/XgidnIoERiaNyE9C05YraP5G0Z0GEY30MLgjmbuYXzJvhtXLkOnRJr74MVNGyOre.xoHODuzEvwdSG9nk?startTime=1612634446000">
						Spring 2021 learnHack GO
					</SEC.Button>
				</ListItem>
				<ListItem>
					<SEC.Button to="https://stevens.zoom.us/rec/share/xz3L4ZF9VjNaK_ClJkDUi_g7yT-IkCj-ZV1Q-M6YSLGzGFWJHUcr8hC-ryz7UKbK.h6GY32tVlS7j11aq">
						Debugging Workshop
					</SEC.Button>
				</ListItem>
				<ListItem>
					<SEC.Button to="https://stevens.zoom.us/rec/share/hADZSxdh28Ib9DvbX0M3qvWW1OBH1lLaeArnEqEs7VqxQjFa_yupJlX1pBQ8DzHA.AcNRY7JWc_jaoBNm">
						Rust Workshop
					</SEC.Button>
				</ListItem>
			</List>
		</Container>
	);
};

export default RecordingsView;
