const fetchMarkdown = async (source: string): Promise<string> => {
	let url = require(`../articles/${source}`);
	if (url.default) {
		url = url.default;
	}
	const response = await fetch(url);
	const newText = await response.text();
	return newText;
};

export default fetchMarkdown;
