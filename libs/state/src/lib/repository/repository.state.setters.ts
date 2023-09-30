import { Injectable } from '@angular/core';
import { setActiveId, setEntities } from '@ngneat/elf-entities';
import { Repository } from '@github-analysis-test/models';
import { repositoriesStore } from './repository.state';
import { setProp } from '@ngneat/elf';

@Injectable({ providedIn: 'root' })
export class RepositoriesStateSetters {

  setRepositories(repositories: Repository[], totalCount: number): void {
    repositoriesStore.update(setEntities(repositories));
    repositoriesStore.update(setProp('totalCount', totalCount));
  }

  setActiveRepository(repositoryName: string): void {
    repositoriesStore.update(setActiveId(repositoryName));
  }

  setSearch(query: string): void {
    repositoriesStore.update(setProp('search', query));
  }
}
