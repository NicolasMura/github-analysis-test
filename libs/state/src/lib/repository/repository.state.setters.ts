import { Injectable } from '@angular/core';
import { Repository } from '@github-analysis-test/models';
import { setProp } from '@ngneat/elf';
import { setActiveId, setEntities } from '@ngneat/elf-entities';
import { repositoriesStore } from './repository.state';

@Injectable({ providedIn: 'root' })
export class RepositoriesStateSetters {
  setRepositories(repositories: Repository[], totalCount?: number): void {
    repositoriesStore.update(setEntities(repositories));
    totalCount && repositoriesStore.update(setProp('totalCount', totalCount));
  }

  setActiveRepository(repositoryName: string): void {
    repositoriesStore.update(setActiveId(repositoryName));
  }

  setSearch(query: string): void {
    repositoriesStore.update(setProp('search', query));
  }
}
