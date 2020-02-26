# Bash Cheatsheet

## Paths

- Paths that start with `/` are absolute paths, others are relative paths.
- Files and folders that start with `.` are hidden be default
- `./` refers to the current working directory. The `/` does not have to be included.
- `..` refers to the parent of the working directory.
- `~` refers to the directory `$HOME`

## Commands

- `pwd` - print working directory <small style="opacity: 0.5">*(but you really shouldn't have to use this because the current working directory is usually displayed in your shell's prompt)*</small>
- `ls` - list files
- `ls -a` - list files, including hidden files
- `cat FILE` - read `FILE`
- `less FILE` - read `FILE`, but let me scroll (useful for reading large files)
- `cd` - change directory to `$HOME`
- `cd DIR` - change directory to `DIR`
- `mv SOURCE TARGET` - move file from `SOURCE` to `TARGET`
- `cp SOURCE TARGET` - copy file from `SOURCE` to `TARGET`
- `rm FILE` - delete `FILE`
- `mkdir DIR` - make a new directory called `DIR`
- `grep PATTERN FILE` - search `FILE` for `PATTERN`, where `PATTERN` is a [regular expression](https://regexr.com)

## Scripting

https://devhints.io/bash
