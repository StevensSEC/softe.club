# How to set the default shell

*Unix based systems only*

You can see a list of available shells with this command:
```
cat /etc/shells
```

To set the default shell, run the command
```
chsh -s PATH
```
where `PATH` is the file path to the shell program, as listed in `/etc/shells`.
