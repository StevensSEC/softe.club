# Documentation

This document is a hub for this website's documentation.

### Common Tasks

-   [Adding new articles](/dev/docs/articles)
-   [Adding new presentations quickly](/dev/docs/slidedecks)

### Design

-   [Visual Design Specification](/dev/docs/design)

### Component Demos

These are some pages used as a playground to test various components and things.

-   [Custom UI Components](/dev/components)
-   [Slide Deck](/dev/slides/slide-deck)
-   [Quick Slides demo](/dev/slides/quick-slides)

### Code Style

To automatically fix any style errors, you can run

```bash
npm run lint
```

We use both prettier and eslint to enforce style and code rules. Prettier is used to format the code after eslint runs it's rules.
**Do not enable any code style rules to the eslint config. They might conflict with prettier.** If there is a style rule for eslint
that you want to add, you **must** check to see if there is a conflict: https://github.com/prettier/eslint-config-prettier.
