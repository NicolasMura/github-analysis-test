import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        ({ HomeComponent }) => HomeComponent,
      ),
  },
];
