# Install git
Download git (Windows): https://git-scm.com/download/win

Windows Terminal (optional): https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701

# Install OpenSSH

```powershell,windows
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

# Generate ssh key

```bash,all platforms
ssh-keygen
```

### Copy the public key

```powershell,windows
cat ~/.ssh/id_rsa.pub | clip
```

```bash,mac
cat ~/.ssh/id_rsa.pub | pbcopy
```

```bash,linux
cat ~/.ssh/id_rsa.pub | xclip -selection copy
```

# Configure git

```
git config --global user.name “FirstName LastName”
git config --global user.email “email” # make sure to use the same email that you used for github
```
