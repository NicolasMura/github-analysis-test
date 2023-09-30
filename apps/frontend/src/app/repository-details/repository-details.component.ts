import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RepositoriesStateSelectors } from '@github-analysis-test/state';
import { Repository } from '@github-analysis-test/models';

@Component({
  selector: 'gat-repository-details',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './repository-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryDetailsComponent implements OnInit {
  private repositoryStateSelectors = inject(RepositoriesStateSelectors);
  private router = inject(Router);

  repository?: Repository;

  ngOnInit(): void {
    this.repository = this.repositoryStateSelectors.getActiveRepository();
  }

  goBackToRespositoriesList(): void {
    this.router.navigate(['home']);
  }
}
