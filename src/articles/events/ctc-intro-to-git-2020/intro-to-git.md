# Install git
Download git (Windows): https://git-scm.com/download/win

Windows Terminal (optional): https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701

# Install git on Mac

There are a couple options for installing git on Mac. The least technical way to install it is through the .dmg found here: https://sourceforge.net/projects/git-osx-installer/

If you know that you have [homebrew](https://brew.sh/) installed, then instead you can run:

```bash,mac
brew install git
```

If you're not sure if you have homebrew installed use the .dmg for now.

# Install OpenSSH

```powershell,windows
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
```

# Generate ssh key

```bash,all platforms
ssh-keygen
```

### Copy the public key to GitHub

```powershell,windows
cat ~/.ssh/id_rsa.pub | clip
```

```bash,mac
cat ~/.ssh/id_rsa.pub | pbcopy
```

```bash,linux
cat ~/.ssh/id_rsa.pub | xclip -selection copy
```

Go here: https://github.com/settings/keys and click "New SSH key"

# Configure git

Make sure to use the same email that you used for GitHub!

```
git config --global user.name “FirstName LastName”
git config --global user.email “email”
```
