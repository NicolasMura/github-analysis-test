import { createStore, withProps } from '@ngneat/elf';
import {
  withActiveId,
  withActiveIds,
  withEntities,
} from '@ngneat/elf-entities';
import { Repository } from '@github-analysis-test/models';

interface StoreProps {
  search: string,
  isRepositoriesLoading: boolean,
  totalCount: number,
}

const initState: StoreProps = {
  search: '',
  isRepositoriesLoading: false,
  totalCount: 0,
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
