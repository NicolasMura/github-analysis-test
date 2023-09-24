import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GetReposResponse } from '@github-analysis-test/models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'gat-repository-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatTooltipModule],
  templateUrl: './repository-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent {
  @Input() repositories?: GetReposResponse['data']['items'] | null;
  displayedColumns = ['name', 'description', 'language', 'actions'];

  goTo(repository: any): void {
    console.log(repository);
  }
}
