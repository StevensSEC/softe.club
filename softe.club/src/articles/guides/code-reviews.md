# A Beginner's Guide to Reviewing Code

Reviewing other people's code is an essential skill for a software developer. It's an important technical and social skill that is necessary to work on a team.

<figure>
	<blockquote>
		I know it can be really intimidating to review someone else's code. You're probably thinking "I'm not good enough to review their code, I'll end up letting bugs through" or "I don't know enough to leave good feedback." I want to let y'all know that neither of those things matter. If bugs get through, whatever, no big deal, we'll just fix it. If you don't have any feedback to give, then you can approve it! Reviewing code is 100% the best way to improve as a developer! It keeps you up to date with what is going on in other parts of the code that you might not be familiar with. It also introduces you to different patterns or implementations that you might not have thought of before.
	</blockquote>
	<figcaption>—Carson, <cite>Slack</cite></figcaption>
</figure>

### I'm not good enough at reading code! I'm gonna accidentally let bugs through...

That's ok! Reading code is hard. That's why we have tools to make it easier to read code, like syntax highlighting and linters. Letting bugs through _is_ obviously not ideal, but it's inevitable that it will happen. We aren't looking for immediate perfection.

### How do I know what to look for?

It varies from project to project, and you'll get better at picking out problems as you encounter them. It's a skill that takes practice. The more you read, write, and review code, you'll get a feel for what's important. You _will_ let bugs slip through, and _that is OK_. Nobody will blame you for that.

As you work on a specific project, you'll also be able to pick up how things should/shouldn't be done, or what problems can be avoided that are specific to your project.

_But,_ if you still have no idea what to do, you can try:

-   Running the code on your machine to see if it works as expected
-   Looking for typos, misspellings
-   Nitpick code style
-   Ask for documentation comments
-   Did they write any unit tests?

### I received a code review and they said I got so many things wrong! I feel inadequate/discouraged.

This is called imposter syndrome. It's important to be able to recognize it so that you can properly deal with it. Know that you aren't alone, it is extremely pervasive in the software industry. You would be hard pressed to find someone who hasn't felt imposter syndrome at some point.

For your health and sanity, try not to take code reviews personally. Remember, **you have the same goal**: write the best code that you can. It's a learning opportunity, for both you and the reviewer.

You might feel like the reviewer is wrong, and it is OK to defend your choices respectfully. SEC club members have had many, many arguments about pull requests, but you know what makes it worth it in the end? We _always_ come out in the end with better code, and everybody benefits.

### Further Reading

-   [How to write code review comments - Google's Engineering Practices documentation](https://google.github.io/eng-practices/review/reviewer/comments.html)
-   [How to Make Good Code Reviews Better - StackOverflow Blog](https://stackoverflow.blog/2019/09/30/how-to-make-good-code-reviews-better/)

## Technical Questions

### What is a pull request?

A pull request (AKA merge request) is a collection of commits that can be reviewed and merged into the main code. When you make a pull request, you are asking for your code to be merged into the project's code.

### How do I pull down a pull reqest's code to my computer?

If you have the [GitHub CLI](https://cli.github.com/), its as easy as

```bash
gh pr checkout NUMBER
```

### How do I review a pull request on GitHub?

When you look at a pull request on GitHub, you'll see a description and a list of commits. Between the title and the description, there is a few tabs. Click on the tab on the rightmost side, which is titled "Files Changed". This will show you the files that were changed in the pull request.

![pull request default screen](guides/code-reviews/pr-default-screen.png)

Now it should look like this:

![pull request default review screen](guides/code-reviews/pr-default-screen.png)

**Pro tip:** _You can set it to split mode because it's easier to read. The rest of the screenshots will be in split mode._

![pull request code viewing settings, lists unified and split views](guides/code-reviews/pr-split-view.png)

Now you can start reviewing the code and making comments. To make a comment about a specific line, mouse over the line and click on the blue "+" button near the line number. Save comments about the code overall to be made right before the review is submitted.

![make comment button](guides/code-reviews/pr-make-comment.png)

To make a proper review, make sure you hit the green button when making comments (should have the text "Start Review" or "Add review comment").

![comment editing widget](guides/code-reviews/pr-start-review.png)

You can make as many of these comments as you would like. Once you're done reviewing, you have to submit it. Scroll all the way back up, and click the green button on the right that says "Finish your review". **Remember to click "Approve" or "Request Changes"!**

![review submission](guides/code-reviews/pr-review-submit.png)

All done! Easy peezy.

## Conventions

SEC has picked up some conventions for code reviews.

In code review comments, the `nit:` prefix (as in _nitpick_) denotes a trivial, non-blocking issue. These comments are usually about really minor issues that are not necessary to fix, but would make the code quality marginally better. For example, the order of imports in a file, or sorting variable declarations alphabetically.

When reviewing, if you only have nits, approve it.
