You should be able to write code, and look cool doing it.
That's what **Pimp My Terminal** is all about. But pimping
out your dev environment doesn't just mean "make it look
cool". It also means to "make it work for you".

# FAQ

### What should I do?

Pimp My Terminal is about helping you customize your dev
environment to _work for you_. If you see something that you
think would be useful, set it up.

### What is the difference between a terminal and a shell?

A terminal is a program hosts a shell. A shell is a program that
takes a user's input, parses it, and runs it.

On Windows, the lines are a little bit blurred because the shell
can also just provide a terminal by default, if needed.

### What are Unix based operating systems?

Short answer: Mac and Linux.

Long answer: Any operating system that follows the POSIX
standard is a Unix based operating system.

### What are packages?

A package in this context refers to a software package. It's
the thing that gets downloaded and installed when you use a
package manager like `apt-get` or `brew`.

### Are there any packages I should install to make things easier? <small style="opacity: 0.5">(Unix only)</small>

It would be useful to have either `curl` or `wget` installed.
On Mac, `curl` should be installed by default. These programs
let you download files from the internet. Useful for downloading
configs directly into the right spot.

# Time Savers

### Tab completion

Much like your IDE, your terminal also has tab completion. Use it!

### Downloading config files

You may want to copy somebody else's config from the internet.
However, selecting all the text, copying it, finding the file
it goes in, pasting it, etc, can be a bit of a pain after you
do it multiple times.

#### Windows

```powershell
Invoke-WebRequest -Uri URL -OutFile TARGET
```

#### Unix

Using wget:

```bash
wget -O TARGET URL
```

Using curl:

```bash
curl -o TARGET URL
```

# IDEs

Your IDE is the easiest place to start making your environment
something that works for you.

### VS Code

[Download](https://code.visualstudio.com) VS Code here.

[How to set your theme in VS Code](/tutorial/vscode-theme)

#### Extensions

_Tip: You can install these quickly by pressing `Ctrl + P` and typing the command `ext install PACKAGE`_

-   TabNine `tabnine.tabnine-vscode` - Uses machine learning to help you write code faster. - Not battery friendy, not memory friendly.
-   GitLens `eamodio.gitlens` - Extra git integration features.
-   Path Intellisense `christian-kohler.path-intellisense` - Autocompletes filenames.
-   Debug Visualizer `hediet.debug-visualizer` - Fancy graphics for visualizing data structures while stepping through code.
-   Vim for VS Code `vscodevim.vim` - Vim keybinds for VS Code.
-   Glassit `s-nlf-fh.glassit` - Allows for VS Code to be set to transparent on Windows and Linux systems.

### Atom

Similar to VS Code. Very customizable.

[Download](https://atom.io) Atom here.

#### Extensions

-   [Hydrogen](https://atom.io/packages/hydrogen) - Turn your python files into jupyter notebooks.

### Sublime Text

In the same vein as VS Code and Atom.

[Download](https://www.sublimetext.com) Subtime Text here.

### Vim

Vim is a text editor that runs in your terminal. [Check out how to use Vim here](/tutorial/cli-text-editors)

Vim configuration is found at `~/.vimrc`

-   https://github.com/amix/vimrc - Useful preset configuration for Vim
-   [Check out Vim color schemes here](https://github.com/rafi/awesome-vim-colorschemes)

### Emacs

Emacs is similar to Vim, but it doesn't run in your terminal.

[Learn how to customize Emacs here](https://www.gnu.org/software/emacs/manual/html_node/emacs/Easy-Customization.html)

# Terminals

You need to have a terminal in order to pimp it out! You
probably already have one, but if it's the default one
(especially on windows) it probably sucks.

[How to set your default terminal (Linux)](/tutorial/set-default-terminal)

### Windows

Windows users should take a look at the [new Windows terminal from Microsoft](https://github.com/microsoft/terminal).
You can install it from the Windows Store.

There are other options:

-   [Windows Terminal](https://github.com/microsoft/terminal)
-   [Alacritty](https://github.com/alacritty/alacritty)
-   [Hyper](https://hyper.is) - Electron based, written in javascript

### Linux

Linux users have a lot of options. Most desktop environments
come with a terminal thats good enough, but you might want
something a little more custom.

-   [Alacritty](https://github.com/alacritty/alacritty) - Fairly new, written in Rust, has good benchmarks
-   [Hyper](https://hyper.is) - Electron based, written in javascript
-   [kitty](https://sw.kovidgoyal.net/kitty/)
-   [Cool Retro Term](https://github.com/Swordfish90/cool-retro-term) - Very fancy, not battery friendly
-   [st](https://st.suckless.org)

### Mac

Most Linux terminals should work on Mac, but your milage may vary.

-   [iTerm2](https://www.iterm2.com)

# Colors

Picking good colors is an essential part of making your environment yours.

-   https://terminal.sexy
-   [pywal](https://github.com/dylanaraps/pywal) - extract color schemes from images, good for matching your background

You can also bring these colors to your IDE.

-   [How to set your theme in VS Code, or make a custom one](/tutorial/vscode-theme)

#### Windows

Windows Terminal users can use the [ColorTool](https://github.com/Microsoft/Terminal/tree/master/src/tools/ColorTool)
to make it easy to configure new color schemes. ColorTool can read iTerm2 color schemes.

List color schemes:

```powershell
ColorTool.exe -s
```

Set color scheme:

```powershell
ColorTool.exe -b -x SCHEME
```

#### Mac

-   [How to enable colors in your terminal on mac](/tutorial/enable-colors-mac)
-   [How to import color schemes into iTerm2](/tutorial/iterm2-import-colors)

#### Linux

It varies, based on your terminal.

# Fonts

-   [powerline/fonts](https://github.com/powerline/fonts) - Pre-patched fonts with extra symbols
-   [Tecate/bitmap-fonts](https://github.com/Tecate/bitmap-fonts)
-   [Hack](https://github.com/source-foundry/Hack)

![Hack preview](pimp-my-terminal/font-preview-hack.png)

-   [IBM Plex Mono](https://github.com/IBM/plex)

![IBM plex mono preview](pimp-my-terminal/font-preview-ibm-plex-mono.png)

-   [Ubuntu Mono](https://design.ubuntu.com/font/)

![Ubuntu mono preview](pimp-my-terminal/font-preview-ubuntu-mono.png)

-   [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)

![Source code pro preview](pimp-my-terminal/font-preview-source-code-pro.png)

-   [Cascadia Code](https://github.com/Microsoft/Cascadia-Code)

![Cascadia Code preview](pimp-my-terminal/font-preview-cascadia-code.png)

# Useful Info

### Where are the configs?

On Windows, it varies.

On Unix-based operating systems, most configuration files are
text files. Usually stored under `~/.config`, but shell configs
are usually in the `~/` directory.

# Shells

When you open a terminal, the terminal starts a program called
the "shell". This is the program that you type commands into.
It parses what you type in and does what you tell it to.

Found a shell you like? Here's [how to set the default shell](/tutorial/set-default-shell).

### Unix based systems (Mac and Linux)

-   bash (default on most Unix systems)
-   zsh - [See what zsh can do](https://code.joejag.com/2014/why-zsh.html)
-   fish - [See what fish can do](https://fishshell.com)

### Windows

Through the Windows Subsystem for Linux, you can use all the Unix shells above. If you don't want to do that, you're stuck with these.

[How to install the Windows Subsystem for Linux](/tutorial/install-wsl)

-   cmd (installed by default, sucks)
-   powershell (installed by default, sucks a lot less) - [Powershell Cheatsheet](/powershell-cheatsheet)
-   git bash (installed with git for windows, kinda sucks)

## Shell Configs

Whenever you open a new terminal, it automatically executes a shell script to load settings and set environment variables. This is where you can add aliases and other shell configuration.

Mac users may need some special configuration to stay organized: [Follow the instructions here](/tutorial/ensure-bashrc-profile-setup)

**It's recommended to edit the file that corresponds with your shell**

all Unix shells: `~/.profile` (only put aliases in here, nothing fancy)

bash: `~/.bashrc`

zsh: `~/.zshrc`

## Shell Appearance

## oh-my-zsh

Lets you customize your zsh prompt.

_Requires zsh_

Website: https://ohmyz.sh/

Documentation: https://github.com/ohmyzsh/ohmyzsh/wiki

### Example Themes

robbyrussell:

![oh-my-zsh example robbyrussell](pimp-my-terminal/ohmyzsh-robbyrussell.jpg)

agnoster:

![oh-my-zsh example agnoster](pimp-my-terminal/ohmyzsh-agnoster.png)

miloshadzic:

![oh-my-zsh example miloshadzic](pimp-my-terminal/ohmyzsh-miloshadzic.png)

## posh-git

Lets you show git info in your Powershell prompt

Website: https://github.com/dahlbyk/posh-git

[How to customize your Powershell prompt](https://github.com/dahlbyk/posh-git/wiki/Customizing-Your-PowerShell-Prompt)

Example:

![posh-git example prompt](pimp-my-terminal/posh-git-prompt.png)

## powerlevel10k

A theme for zsh that is highly customizable, includes powerlines to display system information, and emphasizes speed.

![powerlevel10k screenshot](pimp-my-terminal/powerlevel10k.png)

# Other Tools

-   [fuck](https://github.com/nvbn/thefuck) - Corrects typos in commands

![fuck demo](https://raw.githubusercontent.com/nvbn/thefuck/master/example.gif)

-   [Homebrew](https://brew.sh) - package manager for Mac
-   [Chocolatey](https://chocolatey.org) - package manager for Windows
-   [Rectangle](https://github.com/rxhanson/Rectangle) - Window management utility for Mac
-   [Amethyst](https://ianyh.com/amethyst/) - Tiling window manager for Mac
-   htop - Like task manager, but runs in your terminal - `apt install htop`
-   screenfetch - Shows system info - `apt install screenfetch`
-   neofetch - Shows system info - `apt install neofetch`

# Desktop Environment

On Linux, there are many ways to customize your desktop environment.
You can either use a full blown desktop environment like KDE or XFCE,
or you can use something more minimal.

### Status Bars

Status bars are little programs to show your system status,
like CPU usage, memory usage, etc. Useful for knowing if
something is struggling at a glance.

-   [Polybar](https://github.com/polybar/polybar)

![polybar example](pimp-my-terminal/polybar-example1.png)
![polybar example](pimp-my-terminal/polybar-example2.png)

-   [lemonbar](https://github.com/LemonBoy/bar)

![lemmonbar example](pimp-my-terminal/lemonbar-example1.png)

-   [conky](https://github.com/brndnmtthws/conky)

![conky example 2](pimp-my-terminal/conky-example2.png)
![conky example 1](pimp-my-terminal/conky-example1.png)

![conky example 3](pimp-my-terminal/conky-example3.png)

### Window Managers

There are different kinds of window managers. Some control how windows are laid out, some are more traditional.

-   [i3](https://i3wm.org) (popular)

![i3 example](pimp-my-terminal/i3-example1.png)

-   [awesomewm](https://awesomewm.org)
-   [2bwm](https://github.com/venam/2bwm)
-   [openbox](http://openbox.org/wiki/Main_Page)
-   [bspwm](https://github.com/baskerville/bspwm)

Need help picking a window manager? [LinuxBBQ](https://linuxbbq.com/cream.html) is a linux distro that has **76 different window managers** installed by default so you can try them all out easily.

### What should I look for in a window manager?

It's up to your personal preferences, but if you don't know what you want or need, here's some things to keep in mind.

-   Keybindings (usually these are configurable)
-   Mouse focus/support
-   Multiple monitor support
-   Workspaces/virtual desktop support
-   Taskbar/system tray
-   Window decorations

# Need Inspiration?

https://unixporn.github.io
