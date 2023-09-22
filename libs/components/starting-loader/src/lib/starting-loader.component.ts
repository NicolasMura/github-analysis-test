import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gat-starting-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starting-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartingLoaderComponent {}
