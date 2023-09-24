import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryFormComponent } from '@github-analysis-test/repository-form';

@Component({
  selector: 'gat-home',
  standalone: true,
  imports: [CommonModule, RepositoryFormComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
