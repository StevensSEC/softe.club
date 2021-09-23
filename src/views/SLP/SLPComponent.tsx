import React, { useEffect, useState } from "react";
import SECMarkdown from "../../components/SecMarkdown/SecMarkdown";
import "./SLP.scss";
import fetchMarkdown from "../../utils/fetchMarkdown";
import { useMediaQuery } from "@material-ui/core";

export type Orientation = "left" | "right";
interface SLPProps {
	orientation: Orientation;
	imgSource?: string;
	textSource: string;
	name: string;
}

const SLP = (props: SLPProps): JSX.Element => {
	const [markdown, setMarkdown] = useState("");
	const [__previousSource, setPreviousSource] = useState("");

	const onMobile = useMediaQuery("(min-width:600px)");

	useEffect(() => {
		(async () => {
			if (props.textSource !== __previousSource) {
				const result = await fetchMarkdown(props.textSource);
				setPreviousSource(props.textSource);
				setMarkdown(result);
			}
		})();
	}, [props.textSource, __previousSource]);

	let imageDiv =
		onMobile && props.imgSource ? (
			<div className="img-div">
				<img loading="lazy" src={props.imgSource} alt={props.name} />
			</div>
		) : null;
	let textDiv = (
		<div className="desc">
			<SECMarkdown markdown={markdown} />
		</div>
	);
	if (props.orientation === "left") {
		return (
			<div className="left">
				{imageDiv}
				{textDiv}
			</div>
		);
	} else {
		return (
			<div className="right">
				{textDiv}
				{imageDiv}
			</div>
		);
	}
};

export default SLP;
