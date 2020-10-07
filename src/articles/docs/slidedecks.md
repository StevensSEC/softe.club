# Slide Decks

Slide decks hosted on the website are intended to replace the need for google slides or
powerpoint. It also allows for painless syntax highlighting for code on slides, interactive
slides, consistent visuals, and easier sharing with club members.

# Quick Slide Decks

Sometimes, you just need some slides, and you don't want to care about laying everything
out correctly with CSS. That's precisely what this is for.

TODO: instructions for how to make a new slide deck with this.

## Slides

Each slide follows this format:

```json
{
	"type": "default",
	...template's properties
}
```

There are 3 different available slide types: `default`, `title`, `side-by-side`.

### `default`

Text body:

```json
{
	"type": "default",
	"header": "Slide header",
	"body": ["This is one line.", "This is another line.", "Body text *also accepts markdown*."]
}
```

Image body:

The path to images is relative to `src/assets`.

```json
{
	"type": "default",
	"header": "Slide header",
	"body": "path/to/image.png"
}
```

### `title`

```json
{
	"type": "default",
	"title": "Presentation title",
	"subtitle": "Presentation sub title"
}
```

### `side-by-side`

```json
{
	"type": "default",
	"header": "Presentation title",
	"body1": [
		"This body will be shown on the left.",
		"This is another line.",
		"Body text *also accepts markdown*."
	],
	"body2": [
		"This body will be shown on the right.",
		"This is another line.",
		"These bodies are treated identically to the ones in the `default` slide type."
	]
}
```

## Example Quick Slide Deck

````json
[
	{
		"type": "default",
		"title": "Presentation title",
		"subtitle": "Presentation sub title"
	},
	{
		"type": "default",
		"header": "Open python",
		"sticky": true,
		"body": [
			"Here's some instructions",
			"1. Open your terminal",
			"2. Open python by typing `python3`"
		]
	},
	{
		"type": "default",
		"header": "Slide A",
		"body": ["This is some code", "```python", "print(\"Hello World!\")", "```"]
	},
	{
		"type": "default",
		"header": "Slide B",
		"body": ["This is some more code", "```python", "print(f\"Math: {2+2}\")", "```"]
	}
]
````
