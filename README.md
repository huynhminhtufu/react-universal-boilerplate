## React (Redux) Universal — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" boilerplate &nbsp; <a href="https://github.com/gosu-team/fptu-fe/stargazers"><img src="https://img.shields.io/github/stars/gosu-team/fptu-fe.svg?style=social&label=Star&maxAge=3600" height="20"></a>

[React Universal Boilerplate](https://gosu.team) is an isomorphic web app built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [React](https://facebook.github.io/react/) and [Redux](https://redux.js.org/), containing modern web development
tools such as [Webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/). Initial recipes were prepared for working with a RESTful API Service, running in a Docker environment or running with PM2 tool.

## Environment

Assuming you have a working NodeJS environment and Yarn installed. Recommended to use with VSCode Editor and ESLint Plugin.

## Installation

Fetch all dependencies in `package.json`:

```
$ yarn
```

Generate & modify environment configuration file, make sure `NODE_ENV` is `development` or `production`.

```
$ mv .env.example .env
$ vim .env
```

## Development

Develop with hot reload

```
$ yarn dev
```

## Production

Run build

```
$ yarn build
```

Start express server:

```
$ yarn start
```

## Docker build

First, you need a docker environment installed.

Build image:

```
$ docker build -t app-fe .
```

Run image:

```
$ docker run -dit -p 3000:3000 app-fe:latest
```

## License

Copyright © 2018-present Tu Huynh. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/gosu-team/fptu-fe/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

---

Made with ♥ by Tu Huynh ([fb.com/mr.huynhminhtu](https://fb.com/mr.huynhminhtu))
