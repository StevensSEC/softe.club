# How to write new articles for the website

1. Add a new markdown file under `articles`
2. Add a new object of the form below to the `ROUTES` array in `Router.js`:

```javascript
{
	path: "/mypath",
	articleProps: {source: "my-markdown.md", title: "My New Article"},
	Component: lazy(() => import(/* webpackChunkName: "article" */ "./views/Article/Article.js")),
}
```

Referencing a route in an article that has not yet been added to this array will cause
React to throw an error.

## Images

Embed images with this syntax
```markdown
![image text](PATH TO IMAGE)
```

Note that the path to the image is relative to the `assets` directory.

### Example

![image text](sec-logo.png)

## Code

Blocks of code must specify the programming language in order to be highlighted correctly.

### Examples

```
No language is specified on this block.
```

```javascript
// This is some javascript code
function example(arg) {
	return "I am a javascript function" + 2;
}
```

```python
# This is some python code
def example(arg):
	return "I am a python function", 2
```

```python,linux
# This is some python code, intended for linux
def example(arg):
	return "I am a python function", 2
```
