import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

export type GetReposParameters =
  RestEndpointMethodTypes['search']['repos']['parameters'];

export type GetReposResponse =
  RestEndpointMethodTypes['search']['repos']['response'];

export type Repository = GetReposResponse['data']['items'][0];
