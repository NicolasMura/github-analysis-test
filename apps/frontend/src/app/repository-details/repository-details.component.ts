import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gat-repository-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repository-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryDetailsComponent {}
