import { Repository } from '@github-analysis-test/models';
import { createStore, withProps } from '@ngneat/elf';
import { withActiveId, withEntities } from '@ngneat/elf-entities';

interface StoreProps {
  search: string;
  isRepositoriesLoading: boolean;
  totalCount: number;
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
    idKey: 'name',
  }),
  withActiveId(),
  withProps<StoreProps>(initState),
);
