import { Environment } from './model';

export const base: Omit<Environment, 'env' | 'octokit'> = {
  buildVersion: '{{ buildVersion }}',
};
