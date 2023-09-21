import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@github-analysis-test/search';

@Component({
  selector: 'gat-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
