import { createStore, select, setProp, withProps } from '@ngneat/elf';
import {
  getActiveEntity,
  selectAllEntities,
  setActiveId,
  setEntities,
  withActiveId,
  withActiveIds,
  withEntities,
} from '@ngneat/elf-entities';
import { Repository } from '@github-analysis-test/models';
import { Injectable } from '@angular/core';

interface StoreProps {
  search: string,
  isRepositoriesLoading: boolean,
}

const initState: StoreProps = {
  search: '',
  isRepositoriesLoading: false,
};

export const repositoriesStore = createStore(
  { name: 'repositories' },
  withEntities<Repository, 'name'>({
    initialValue: [],
    idKey: 'name'
  }),
  withActiveId(),
  withActiveIds(),
  withProps<StoreProps>(initState)
);

@Injectable({ providedIn: 'root' })
export class RepositoriesState {
  repositories$ = repositoriesStore.pipe(selectAllEntities());

  setRepositories(repositories: Repository[]): void {
    repositoriesStore.update(setEntities(repositories));
  }

  getActiveRepository(): Repository | undefined {
    console.log(repositoriesStore.query(getActiveEntity()));
    return repositoriesStore.query(getActiveEntity());
  }

  setActiveRepository(repositoryName: string): void {
    repositoriesStore.update(setActiveId(repositoryName));
  }

  getSearch(): string {
    return repositoriesStore.getValue().search;
  }

  setSearch(query: string): void {
    repositoriesStore.update(setProp('search', query));
  }
}
