const articles = import.meta.glob("../articles/**/*.md");

const fetchMarkdown = async (source: string): Promise<string> => {
	let url = (await articles[`../articles/${source}.md`]()) as any;
	if (url.default) {
		url = url.default;
	}
	const response = await fetch(url);
	const newText = await response.text();
	return newText;
};

export default fetchMarkdown;
