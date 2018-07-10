// @flow
import { AsyncStorage } from 'react-native';

class LocalStorage {
  static get(key: string): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      AsyncStorage.getItem(key, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  }

  static set = (key: string, value: *) => {
    const stringifiedValue = typeof value === 'string' ? value : JSON.stringify(value);

    return AsyncStorage.setItem(key, stringifiedValue);
  };

  static multiGet(keys: Array<string>): Promise<any> {
    return new Promise((resolve, reject) => {
      AsyncStorage.multiGet(keys, (err, values) => {
        if (err) {
          reject(err);
        } else {
          resolve(values.map(value => value[1]));
        }
      });
    });
  }

  static remove(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  static multiRemove(keys: Array<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      AsyncStorage.multiRemove(keys, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

export default LocalStorage;
