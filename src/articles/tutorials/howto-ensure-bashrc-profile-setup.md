# Making sure your .bashrc and .profile are set up

On Linux, the configuration here is set up by default (most of the time). On Mac, that may not be true.

Technically, this configuration isn't necessary. You could put all your configuration in `.profile`, but that would make it break if you decided to switch shells and you use features in your `.profile` that aren't supported in the other one.

1. Check if `~/.profile` exists. If it doesn't, you don't need to do this.
2. Open `~/.profile`
3. Check to see if this snippet is in there already. If not, add it.

```bash
if [[ $BASH_VERSION ]]; then
	. $HOME/.bashrc
fi

if [[ $ZSH_VERSION ]]; then
	. $HOME/.zshrc
fi
```

_Source: https://superuser.com/questions/183870/difference-between-bashrc-and-bash-profile_
