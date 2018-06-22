import { AppRegistry } from 'react-native';
import { debugNetwork } from '/infra/bootstrap';
import App from './App';

if (global.__DEV__) {
  debugNetwork();
  console.disableYellowBox = true;
}

AppRegistry.registerComponent('reactnativeapptemplate', () => App);
