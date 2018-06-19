# react-native-app-template
This project is an opinionated base template for react-native applications, and it's configured for working on a Mac.
It includes most of the infrastructure needed for a working app, including:

##### Developing tools
- debugging - [react-native-debugger](https://github.com/jhen0409/react-native-debugger) :white_check_mark:
- lint - [ESLint](https://eslint.org/) :x:
- [Prettier](https://github.com/prettier/prettier) :x:
- static type checker - [flow](https://flow.org/) :x:
- testing - [Jest](https://facebook.github.io/jest/) & [Detox](https://github.com/wix/detox) :x:
##### Logging tools
- JS logging - [logentries](http://logentries.com/) :x:
- Error logs - [bugsnag](https://www.bugsnag.com/) :x:
- BI logging - [mixpanel](https://mixpanel.com/) :x:
##### Build tools
- JS updates - [Code Push](https://microsoft.github.io/code-push/) :x:
- CI - [bitrise](http://bitrise.io/) :x:
##### Other
- HTTP package - [axios](https://github.com/axios/axios) :x:
- device information - [device-info](https://github.com/rebeccahughes/react-native-device-info) & [version-number](https://github.com/APSL/react-native-version-number) :x:
- absolute imports - [root-slash-import](https://github.com/mantrajs/babel-root-slash-import) :x:
- icons - [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) :x:
- navigation - [react-navigation](https://reactnavigation.org/) :x:

## Getting started

After cloning the project you need to install react-native-debugger with [Homebrew Cask](https://caskroom.github.io) cask by running:
```bash
$ brew update && brew cask install react-native-debugger
```

Then install all dependencies by running:
``` js
npm i
```

