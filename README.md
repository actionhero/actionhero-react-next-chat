[![CircleCI](https://circleci.com/gh/actionhero/actionhero-react-next-chat.svg?style=svg)](https://circleci.com/gh/actionhero/actionhero-react-next-chat)

I am an isomorphic React + Next.JS project that uses ActionHero websockets.

## Install
This is a [React Project](https://facebook.github.io/react/) utilizing [next.js](https://github.com/zeit/next.js/) and [react-bootstrap](https://react-bootstrap.github.io/)

I connect to `demo.actionherojs.com` as the API server

- `npm install`

## Running in Development
- `npm run dev`

## Building for Production

- `npm run build`
- `npm run serve`

The master branch of this repository is automatically deployed by circle.ci on a successful test run to react.actionherojs.com.  

## Linting

We use [standard.js](https://standardjs.com) to manage our lint rules.  We run `standard` as part of our test suite, and your contributions must pass.  Standard is *very* opinionated and inflexible such that we cannot inject our own opinions.  There are no eslint/jshint files to manage in this project.  

## CSS
- we use a default boostrap CSS file
- all components provide thier own CSS inline
