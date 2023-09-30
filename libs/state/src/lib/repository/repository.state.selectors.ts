import { Injectable } from '@angular/core';
import { getActiveEntity, selectAllEntities } from '@ngneat/elf-entities';
import { select } from '@ngneat/elf';
import { Repository } from '@github-analysis-test/models';
import { repositoriesStore } from './repository.state';

@Injectable({ providedIn: 'root' })
export class RepositoriesStateSelectors {
  repositories$ = repositoriesStore.pipe(selectAllEntities());
  totalCount$ = repositoriesStore.pipe(
    select(({ totalCount }) => totalCount )
  );

  getActiveRepository(): Repository | undefined {
    return repositoriesStore.query(getActiveEntity());
  }

  getSearch(): string {
    return repositoriesStore.getValue().search;
  }
}
