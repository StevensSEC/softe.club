import ottScreenshot from "../../assets/slp/opentogethertube/ott-screenshot2.png";
import qqScreenshot from "../../assets/slp/quick-quack.png";
import sweScreenshot from "../../assets/slp/stevens-web-extension/popup.png";
import pblScreenshot from "../../assets/slp/pokemonbattlelib.png";

interface SLPInfo {
	img?: any;
	name: string;
	markdown: string;
}

const PROJECTS: SLPInfo[] = [
	{
		name: "Monocle",
		markdown: "slp/monocle",
	},
	{
		img: pblScreenshot,
		name: "pokemonbattlelib",
		markdown: "slp/pokemonbattlelib",
	},
	{
		img: sweScreenshot,
		name: "Stevens Web Extension",
		markdown: "slp/stevens-web-extension",
	},
	{
		img: ottScreenshot,
		name: "Open Together Tube",
		markdown: "slp/open-together-tube",
	},
	{
		img: qqScreenshot,
		name: "Quick Quack",
		markdown: "slp/quick-quack",
	},
];
export default PROJECTS;
