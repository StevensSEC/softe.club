# How to set your theme in VS Code

1. Open Settings `Ctrl + ,`
2. Search for "theme"
3. Pick a theme from the dropdown here:

![Workbench: Color Theme](pimp-my-terminal/howto-vscode-theme.png)

You can also install more themes as extensions, and you can install different icon themes.

![Workbench: Icon Theme](pimp-my-terminal/howto-vscode-icon-theme.png)

# How to use custom colors for VS Code

1. Open Settings (JSON)
	1. `Ctrl + Shift + P` to open the command palette.
	2. Select `Preferences: Open Settings (JSON)`

	![Command Palette](pimp-my-terminal/howto-vscode-settings-json.png)
2. You should now see the JSON config for VS Code.
3. Now you can begin customizing.

You can customize your active theme through `workbench.colorCustomizations`
and `editor.tokenColorCustomizations`. You can use Intellisense to see what
you can change.

To edit how the UI looks, use `workbench.colorCustomizations`:

![activity bar theming](https://code.visualstudio.com/assets/docs/getstarted/themes/theme-activitybar.gif)

To customize how a specific theme looks only:

```json
"workbench.colorCustomizations": {
    "[Monokai]": {
        "sideBar.background": "#347890"
    }
},
```

To edit syntax highlighting, use `editor.tokenColorCustomizations`.

```json
"editor.tokenColorCustomizations": {
	"comments": "#f3f",
},
```

For more information, see the [official documentation](https://code.visualstudio.com/docs/getstarted/themes)
