import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { GetReposResponse } from '@github-analysis-test/models';

@Component({
  selector: 'gat-repository-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatTooltipModule],
  templateUrl: './repository-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {
  @Input() repositories?: GetReposResponse['data']['items'] | null;
  router = inject(Router);
  displayedColumns = ['name', 'description', 'language', 'actions'];
}
