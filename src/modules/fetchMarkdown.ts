interface MarkdownResult {
	markdown: string
	__previousSource: string
}

const fetchMarkdown = async (source: string) : Promise<MarkdownResult> => {
	let url = require(`../articles/${source}`);

	const response = await fetch(url)
	const newText = await response.text()
	return {
		markdown: newText,
		__previousSource: source
	}
};

export type { MarkdownResult }
export { fetchMarkdown };
