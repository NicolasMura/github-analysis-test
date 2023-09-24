import { base } from './base';
import { Environment } from './model';

export const environment: Environment = {
  ...base,
  env: 'prod',
  octokit: {
    accessToken: ''
  },
};
