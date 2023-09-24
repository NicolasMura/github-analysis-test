import { base } from './base';
import { Environment } from './model';

export const environment: Environment = {
  ...base,
  env: 'dev',
  octokit: {
    accessToken: ''
  },
};
