import { environmentTypes } from '/vars/enums';

export const isDevEnv = !process.env.ENV || process.env.ENV === environmentTypes.DEVELOPMENT;
