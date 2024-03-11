# softe.club

![Build and Deploy](https://github.com/StevensSEC/sec.club/workflows/Build%20and%20Deploy/badge.svg)

This is the repo for the Software Engineering Club's website.

Documentation can be found in `src/articles/docs`, or at https://softe.club/dev/docs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Download and install [node version 14](https://nodejs.org/download/release/v14.17.6/). You can also do this with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you like, in which case you run:
```
nvm install 14
```

Once node is installed, run:
```
corepack enable
npm install
```

to install all dependencies.

## Run

To run the project, run:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To test that changes do not break existing components, run:

```
npm test
```

To build the production app to be served, run:

```
npm run build
```
