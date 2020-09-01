# Git Cheatsheet

## Terminology

- Commit: Tells git what lines to add, change, or remove, kind of like a snapshot. (Can be used as both a noun and verb.)
- Stage: Tells git to put this change in the next commit that you make.
- Branch: A list of commits ending with the HEAD commit.
- HEAD: The latest commit on a branch.
- Remote: A URL to the git repository that is not on your computer. The default remote when you clone a repo is `origin`.

## Workflow: Stage then Commit

1. Stage desired changes with `git add`
2. Make the commit: `git commit -m "COMMIT MESSAGE"`

## Workflow: Just Commit

1. Add any untracked files: `git add path/to/file1 path/to/file2 ...`
2. Make the commit: `git commit -m "COMMIT MESSAGE" path/to/file1 path/to/file2 ...`

# Commands

## Commits

- `git status` - Display the state of the current branch.
- `git log` - List commits on the current branch, starting with the `HEAD`.
- `git clone URL` - Clone the repository at `URL`. Automatically creates a new folder for the files so you don't have to.

### Staging Changes

- `git add path/to/file1 path/to/file2 ...` - Stage the entire file(s).
- `git add --patch path/to/file` - Interactively stage specific lines in a file.
- `git mv target destination` - Works like the normal `mv` command, but it stages the change. Used to move or rename files.
- `git rm path/to/file` - Deletes the file and stages the change.

### Make Commits

- `git commit -m "COMMIT MESSAGE"` - Make a commit using the currently staged changes.
- `git commit --amend` - Append the last commit with the currently staged changes. Also lets you edit the last commit's message.

## Branches

### Manage

- `git checkout -b foobar` - Create and switch to the branch `foobar`
- `git checkout foobar` - Switch to the branch `foobar`
- `git branch -d foobar` - Delete the branch `foobar`

### Merging

- `git merge foobar` - Merge the branch `foobar` into the current branch.
- `git rebase foobar` - Sets the base branch for the current branch to `foobar`, and replays your changes on top of that.

### Remote

Remote branches are branches that are not on your machine.

- `git pull` - Pull the remote version of the current branch to your local version. Updates the local version to match the remote one.
- `git pull foobar` - Pull the remote branch `foobar` and merge it into the current branch. You usually *don't* want to do this.
- `git push origin foobar` - Push the branch `foobar` to the remote `origin`.
- `git fetch origin` - Update your local copy of git metadata to match `origin`. Does **not** overwrite changes.

### Reset

**WARNING: These commands are destructive. Information lost as a result can't be recovered.**

- `git reset --hard` - Resets the current branch to the latest commit. **Destroys staged and unstaged changes** in tracked files. Useful for starting over on a bug fix or feature.