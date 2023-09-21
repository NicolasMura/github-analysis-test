import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gat-loading-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPageComponent {}