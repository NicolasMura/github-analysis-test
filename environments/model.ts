export interface Environment {
  env: 'local' | 'dev' | 'prod';

  buildVersion: string;
  octokit: {
    accessToken: string;
  };
}
