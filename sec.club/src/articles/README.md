# How to write new articles for the website

1. Add a new markdown file under `articles`
2. Add a route using the `Article` view that references the markdown file in `App.js`

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
