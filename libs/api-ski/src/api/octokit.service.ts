import { Injectable, inject } from "@angular/core";
import { environment } from '@github-analysis-test/environment';
import { GetReposResponse } from "@github-analysis-test/models";
import { RepositoriesState } from "@github-analysis-test/state";
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class OctokitService {
  private repositoryState = inject(RepositoriesState);
  octokit = new Octokit({
    auth: environment.octokit.accessToken
  });

  async searchGithubRepositories(query: string): Promise<GetReposResponse['data']> {
    const { data } = await this.octokit.request('/search/repositories?q={query}&type={type}', {
        query,
        type: 'repositories',
      });
    this.repositoryState.setRepositories(data.items);

    return data;
  }
}
