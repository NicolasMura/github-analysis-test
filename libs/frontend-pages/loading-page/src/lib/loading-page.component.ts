import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'github-analysis-test-loading-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent {}
