import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { Repository } from '@github-analysis-test/models';
import { RepositoriesState } from '@github-analysis-test/state';

@Component({
  selector: 'gat-repository-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatTooltipModule],
  templateUrl: './repository-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {
  private repositoryState = inject(RepositoriesState);
  private router = inject(Router);

  @Input() repositories?: Repository[] | null;
  displayedColumns = ['name', 'description', 'language', 'actions'];

  selectRepository({ name }: Repository): void {
    this.repositoryState.setActiveRepository(name);
    setTimeout(() => {
      this.router.navigate(['/repositories', name])
    }, 500);
  }
}
