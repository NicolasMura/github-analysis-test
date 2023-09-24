import { Injectable } from "@angular/core";
import { environment } from '@github-analysis-test/environment';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class OctokitService {
  octokit = new Octokit({
    auth: environment.octokit.accessToken
  });
}
