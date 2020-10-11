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

### Default Slide

_NOTE: If `type` is not specified, this is the slide type that is used._

```yaml
type: default
content: |
    This is one line.

    This is another line.

    Content *also accepts markdown*.
```

### Title Slide

```yaml
type: title
title: Presentation title
subtitle: Presentation sub title
```

### Side-by-side Slide

```yaml
type: side-by-side
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
  - type: title
	title: Presentation title
	subtitle: Presentation subtitle
  - sticky: 2 # This will be stickied for the next 2 slides
	content:
	  Here's some instructions

	  1. Open your terminal
	  2. Open python by typing `python3`
  - content: |
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

## Slide References

A slide can be uniquely identified via its `name` property, which acts like a reference
or unique ID to the slide. The `name` can be used in the `sticky` prop to reference
the ending slide instead of its index.

```yaml
slides:
    - type: title
      title: Slide Names
      subtitle: Use custom names to reference a slide
      name: title
    - type: default
      content: |
          This slide will be sticky.

          Normally, you need to know the slide index ahead of time;
          however, now you can specify a custom name via the `name` prop which
          can be used as a dynamic reference.

          This will be sticky until the slide with name `nail-polish-remover` is found.
      sticky: nail-polish-remover
    - type: default
      content: |
          A slide does not need to contain a name. Names must be unique.

          *Names are available on slides programmatically through the `name` prop.*
    - type: default
      content: |
          Names are only a QoL feature for people making slides. They are precomputed
          before rendering so that no duplicate names exist and if in the future, the
          need to return to a previous slide arises.

          An example might be to reference a presentation by slide with a URL.
          `softe.club/slides/learn-git#making-a-pr` for example.
    - type: default
      content: I am the NAIL POLISH REMOVER SLIDE. NO MORE STICKY.
      name: nail-polish-remover
    - type: default
      content: And that's how simple slide names are!
```
