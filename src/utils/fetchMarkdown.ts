const fetchMarkdown = async (source: string): Promise<string> => {
	const url = require(`../articles/${source}`);
	const response = await fetch(url);
	const newText = await response.text();
	return newText;
};

export default fetchMarkdown;
