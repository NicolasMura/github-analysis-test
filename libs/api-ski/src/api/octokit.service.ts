import { Injectable, inject } from '@angular/core';
import { environment } from '@github-analysis-test/environment';
import { GetReposResponse } from '@github-analysis-test/models';
import { RepositoriesStateSetters } from '@github-analysis-test/state';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class OctokitService {
  private repositoriesStateSetters = inject(RepositoriesStateSetters);
  octokit = new Octokit({
    auth: environment.octokit.accessToken
  });

  async searchGithubRepositories(query: string): Promise<GetReposResponse['data']['items']> {
    const { data } = await this.octokit.request('/search/repositories?q={query}&type={type}', {
        query,
        type: 'repositories',
      });
    this.repositoriesStateSetters.setRepositories(data.items, data.total_count);

    return (data as GetReposResponse['data']).items;
  }
}
