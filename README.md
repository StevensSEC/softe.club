# softe.club

![Build and Deploy](https://github.com/StevensSEC/sec.club/workflows/Build%20and%20Deploy/badge.svg)

This is the repo for the Software Engineering Club's website.

Documentation can be found in `src/articles/docs`, or at https://softe.club/dev/docs.

## Setup

Download and install node.js version 20. You should do this with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), in which case you run:
```
nvm install 20
nvm use 20
```

Once node is installed, run:
```
corepack enable
yarn install
```

to install all dependencies.

## Run

To run the project, run:

```
yarn run dev
```

Open the link it shows in your console to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To test that changes do not break existing components, run:

```
yarn test
```

To build the production app to be served, run:

```
yarn build
```
