# react-native-app-template
This project is an opinionated base template for react-native applications, and it's configured for working on a Mac.
It includes most of the infrastructure needed for a working app, including:

##### Developing tools
- debugging - [react-native-debugger](https://github.com/jhen0409/react-native-debugger) :white_check_mark:
- lint - [ESLint](https://eslint.org/) :white_check_mark:
- [Prettier](https://github.com/prettier/prettier) :white_check_mark:
- static type checker - [flow](https://flow.org/) :white_check_mark:
- testing - [Jest](https://facebook.github.io/jest/) & [Detox](https://github.com/wix/detox) :x:
##### Logging tools
- JS logging - [logentries](http://logentries.com/) :x:
- Error logs - [bugsnag](https://www.bugsnag.com/) :x:
- BI logging - [mixpanel](https://mixpanel.com/) :x:
##### Build tools
- JS updates - [Code Push](https://microsoft.github.io/code-push/) :x:
- CI - [bitrise](http://bitrise.io/) :x:
##### Other
- HTTP package - [axios](https://github.com/axios/axios) :white_check_mark:
- device information - [device-info](https://github.com/rebeccahughes/react-native-device-info) & [version-number](https://github.com/APSL/react-native-version-number) :x:
- absolute imports - [root-slash-import](https://github.com/mantrajs/babel-root-slash-import) :white_check_mark:
- icons - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) :x:
- navigation - [react-navigation](https://reactnavigation.org/) :x:
- local storage - layer of abstraction above React-Native AsyncStorage for a better API and to promisify it :white_check_mark:

## IDE

We use [VSCode](https://code.visualstudio.com/) as our IDE. While we use a decent range of extensions, the following are considered required for working with this repository:
- ESLint
- Prettier - Code formatter
- vscode-flow-ide

If you're using a different IDE you'll need to configure your own extensions to replace the mentioned above.

## Getting started

After cloning the project you need to install react-native-debugger with [Homebrew Cask](https://caskroom.github.io) cask by running:
```bash
$ brew update && brew cask install react-native-debugger
```

Install all dependencies by running:
``` js
npm i
```

Install flow library definitions using [flow-typed](https://github.com/flowtype/flow-typed):
```js
flow-typed install
```

