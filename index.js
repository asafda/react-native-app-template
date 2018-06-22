// @flow
import { AppRegistry } from 'react-native';
import { debugNetwork } from '/infra/bootstrap';
import App from './App';

if (global.__DEV__) {
  debugNetwork();
  // $FlowFixMe
  console.disableYellowBox = true; // eslint-disable-line no-console
}

AppRegistry.registerComponent('reactnativeapptemplate', () => App);
