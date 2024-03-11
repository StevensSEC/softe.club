# How to use text editors in your terminal

## `nano` - easy to learn, useful for one time uses

To open an existing file with nano, or create the file at `PATH` when you save:

```
nano PATH
```

When you open nano, the keybinds are displayed at the bottom of the screen!

![nano keybinds](nano-screenshot.png)

`^` means control (_even on Mac_).

## `vim` - harder to learn, very powerful

_Vim is very weird at first, and it's very confusing for beginners._

To open an existing file with vim:

```
vim PATH
```

### Editing text

Vim has 2 basic modes:

-   normal mode (default)
-   insert mode

In order to edit text, you must be in insert mode. From normal mode, press `i`
enter insert mode. Now you can edit text like you normally would. To exit insert
mode, press `Esc`.

To save your changes and quit, you must be in normal mode. Type

```
:wq
```

`w` means write file, and `q` means quit. You can omit either of these letters,
and it'll just do those things.
