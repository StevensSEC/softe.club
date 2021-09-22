interface MarkdownResult {
	markdown: string
	__previousSource: string
}

const fetchMarkdown = async (source: string, __previousSource: string, oldText: string) : Promise<MarkdownResult> => {
	if (source === __previousSource) {
		// don't fetch again if the source hasn't changed
		return {
			markdown: oldText,
			__previousSource: __previousSource
		};
	}

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
