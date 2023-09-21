import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('@github-analysis-test/home').then(
        ({ HomeComponent }) => HomeComponent,
      ),
  },
];
