# Slide Decks

Slide decks hosted on the website are intended to replace the need for google slides or
powerpoint. It also allows for painless syntax highlighting for code on slides, interactive
slides, consistent visuals, and easier sharing with club members.

# Quick Slide Decks

Sometimes, you just need some slides, and you don't want to care about laying everything
out correctly with CSS. That's precisely what this is for.

## Slides

To edit a slide, create a new `.yaml` file. The structure is explained below.

```yaml
slides:
  - <slide 1 props>
  - <slide 2 props>
  ...and so on
```

There are 3 different available slide types: `default`, `title`, `side-by-side`.
This is the format for each slide in the slides array:

### Title Slide

```yaml
type: default,
title: Presentation title
subtitle: Presentation sub title
```

### Default Slide

```yaml
type: default
content: |
    This is one line.

    This is another line.

    Content *also accepts markdown*.
```

### Side-by-side Slide

```yaml
type: default
header: Presentation title
content:
  left: |
    This body will be shown on the left.

	This is another line.

	Body text *also accepts markdown*.
  right: |
	This body will be shown on the right.

	This is another line.

	These bodies are treated identically to the ones in the `default` slide type
```

## Example Quick Slide Deck

````yaml
slides:
  - type: default
	title: Presentation title
	subtitle: Presentation subtitle
  - type: default
	sticky: 2 # This will be stickied for the next 2 slides
	content:
	  Here's some instructions

	  1. Open your terminal
	  2. Open python by typing `python3`
  - type: default
	content: |
	  This is some code

	  \```python
	  print(\"Hello World!\")"
	  \```
  - type: "default",
	content: |
	  This is some more code
	  \```python
	  print(f\"Math: {2+2}\")
	  \```
````
