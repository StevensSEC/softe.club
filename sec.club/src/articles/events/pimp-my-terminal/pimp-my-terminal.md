# Pimp My Terminal

<span style="color:red">

# TODO: organize

</span>

## IDEs

Your IDE is the easiest place to start making your environment something that works for you.

The easiest customization is picking a preset theme!

### VS Code

1. Open Settings `Ctrl + ,`
2. Search for "theme"
3. Pick a theme from the dropdown here:

![Workbench: Color Theme](pimp-my-terminal/howto-vscode-theme.png)

You can also install more themes as extensions, and you can install different icon themes.

![Workbench: Icon Theme](pimp-my-terminal/howto-vscode-icon-theme.png)

### Extensions

Pimping out your dev environment doesn't just mean "make it look cool". It also means to "make it work for you". These extensions are tools to improve productivity.

- TabNine `tabnine.tabnine-vscode` - Uses machine learning to help you write code faster. - Not battery friendy, not memory friendly.
- GitLens `eamodio.gitlens` - Extra git integration features.
- Path Intellisense `christian-kohler.path-intellisense` - Autocompletes filenames.
- Debug Visualizer `hediet.debug-visualizer` - Fancy graphics for visualizing data structures while stepping through code.

## Terminals

You need to have a terminal in order to pimp it out! You probably already have one, but if it's the default one (especially on windows) it probably sucks.

### Windows

Windows users should take a look at the [new Windows terminal from Microsoft](https://github.com/microsoft/terminal). You can install it from the Windows Store.

There are other options:

- [Windows Terminal](https://github.com/microsoft/terminal)
- [Alacritty](https://github.com/alacritty/alacritty)

### Linux

Linux users have a lot of options. Most desktop environments come with a terminal thats good enough.

- [Alacritty](https://github.com/alacritty/alacritty)
- [Hyper](https://hyper.is)
- [kitty](https://sw.kovidgoyal.net/kitty/)
- [Cool Retro Term](https://github.com/Swordfish90/cool-retro-term) - Very fancy, not battery friendly, not very customizable
- [st](https://st.suckless.org)

### Mac

Most Linux terminals should work on Mac, but your milage may vary.

- [iTerm2](https://www.iterm2.com)

## Colors

Picking good colors is an essential part of making your environment yours.

- https://terminal.sexy

<span style="background:red">TODO: Try using ColorTool</span>

#### Windows

Windows Terminal users can use the [ColorTool](https://github.com/Microsoft/Terminal/tree/master/src/tools/ColorTool) to make it easy to configure new color schemes.

#### Mac

- [How to enable colors in your terminal on mac](/tutorial/enable-colors-mac)
- [How to import color schemes into iTerm2](/tutorial/iterm2-import-colors)

## Fonts

<span style="background:red">TODO: list good monospace fonts</span>

<span style="background:red">TODO: display fonts</span>

- [powerline/fonts](https://github.com/powerline/fonts) - Pre-patched fonts with extra symbols
- [Tecate/bitmap-fonts](https://github.com/Tecate/bitmap-fonts)

## Useful Info

### Where are the configs?

On Windows, it varies.

On Unix-based operating systems, most configuration files are text files. Usually stored under `~/.config`, but shell configs are usually in the `~/` directory.

## Shells

When you open a terminal, the terminal starts a program called the "shell". This is the program that you type commands into. It parses what you type in and does what you tell it to.

Found a shell you like? Here's [how to set the default shell](/tutorial/set-default-shell).

### Unix based systems (Mac and Linux)

- bash (default on most Unix systems)
- zsh <span style="background:red">TODO: show features of zsh</span>
- fish <span style="background:red">TODO: show features of fish</span>

### Windows

Through the Windows Subsystem for Linux, you can use all the Unix shells above. If you don't want to do that, you're stuck with these.

[How to install the Windows Subsystem for Linux](/tutorial/install-wsl)

- cmd (installed by default, sucks)
- powershell (installed by default, sucks a lot less)
- git bash (installed with git for windows, kinda sucks)

## Shell configs

Whenever you open a new terminal, it automatically executes a shell script to load settings and set environment variables. This is where you can add aliases and other shell configuration.

<span style="background:red">UNCLEAR: which one should you edit?</span>

all Unix shells: `~/.profile` (Mac users, edit this one)

bash: `~/.bashrc`

zsh: `~/.zshrc`

## Shell Appearance

## oh-my-zsh

*Requires zsh*

Website: https://ohmyz.sh/

Documentation: https://github.com/ohmyzsh/ohmyzsh/wiki

### Example Themes

robbyrussell:

![oh-my-zsh example robbyrussell](pimp-my-terminal/ohmyzsh-robbyrussell.jpg)

agnoster:

![oh-my-zsh example agnoster](pimp-my-terminal/ohmyzsh-agnoster.png)

miloshadzic:

![oh-my-zsh example miloshadzic](pimp-my-terminal/ohmyzsh-miloshadzic.png)

## Desktop Environment

On Linux, there are many ways to customize your desktop environment. You can either use a full blown desktop environment like KDE or XFCE, or you can use something more minimal.

Status Bars
- [Polybar](https://github.com/polybar/polybar)
- [lemonbar](https://github.com/LemonBoy/bar)

Window Managers

There are different kinds of window managers. Some control how windows are laid out, some are more traditional.

- [i3](https://i3wm.org) (popular)
- [awesomewm](https://awesomewm.org)
- [2bwm](https://github.com/venam/2bwm)
- [openbox](http://openbox.org/wiki/Main_Page)

Need help picking a window manager? [LinuxBBQ](https://linuxbbq.com/cream.html) is a linux distro that has **76 different window managers** installed by default so you can try them all out easily.

<span style="background:red">TODO: download LinuxBBQ ISO to usb drive so people don't have to wait to download it</span>

### What should I look for in a window manager?

It's up to your personal preferences, but if you don't know what you want or need, here's some things to keep in mind.

- Keybindings (usually these are configurable)
- Mouse focus/support
- Multiple monitor support
- Workspaces/virtual desktop support
- Taskbar/system tray
- Window decorations

# Need Inspiration?

https://unixporn.github.io