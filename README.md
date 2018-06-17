# cumulocity-hello-plugin-modular

[![version](https://img.shields.io/npm/v/cumulocity-hello-plugin-modular.svg)](https://www.npmjs.com/package/cumulocity-hello-plugin-modular)
[![downloads](https://img.shields.io/npm/dt/cumulocity-hello-plugin-modular.svg)](http://npm-stat.com/charts.html?package=cumulocity-hello-plugin-modular)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/dwiyatci/cumulocity-hello-plugin-modular/master/LICENSE.txt)

#### *** Heads-up! Since version 2.X, this Cumulocity UI plugin boilerplate is written in ES6+. 🎉 ***

A boilerplate to start writing Cumulocity UI plugin with a taste of [modular](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#folders-by-feature-structure) structure.

### Why?
This boilerplate is basically a twin of [cumulocity-ui-plugin-examples](https://bitbucket.org/m2m/cumulocity-ui-plugin-examples) and a sibling to [cumulocity-smart-apps-webpack](https://github.com/dwiyatci/cumulocity-smart-apps-webpack): it exists for similar reasons. ;)

## Installation
* Make sure you have Node.js ≥ v8.9.0 installed and npm from its [website](https://nodejs.org), or better even, use [nvm](https://github.com/creationix/nvm).

- Install [yarn](https://yarnpkg.com/en/docs/install).

- Install [cumulocity-tools](https://www.npmjs.com/package/cumulocity-tools).

- Clone the repo, `cd` to your project directory.

- Adapt the UI build version you want to develop against:
```bash
$ c8y install [ui_build_version]
```

- Install dependencies:
```bash
$ yarn install:clean
```

## Usage
Check out [the introduction to plugin development docs](http://cumulocity.com/guides/web/introduction).

## Quicky up and running
Oh well, I know that you guys are a bunch of lazy people. How to get this app deployed and see it running on my tenant, you ask? Be my guest:

```bash
$ yarn deploy
```

After a few more steps in interactive command line user interfaces, you should then be able to access the app on `https://<your-tenant-url>/apps/helloapp`.

## Unit testing
```bash
$ yarn test
```

## Linting
```bash
$ yarn lint <targetFileOrDir>
```

Example:
```bash
$ yarn lint plugins
```

Or better yet, make your IDE automatically integrate the linting process based on the .rc file (`.eslintrc.yaml`).

The rules quite strictly follow the [Airbnb JavaScript Style Guide (ES6+ without React)](https://github.com/airbnb/javascript).

## Author
Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License
MIT.

See [LICENSE.txt](LICENSE.txt).
