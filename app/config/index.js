import { isDevEnv } from '/infra/utils';

const sharedConfig = {};
const devConfig = {
  api: {
    url: '',
    timeout: 60000
  }
};
const prodConfig = {
  api: {
    url: '',
    timeout: 60000
  }
};

const config = { ...sharedConfig, ...(isDevEnv ? devConfig : prodConfig) };

export default config;
