import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  // Main (/home)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/landing/landing.routes').then((m) => m.LANDING_ROUTES),
      },
    ],
  },
  // Not Found Page
  {
    path: '**',
    loadComponent: () =>
      import('./features/errors/pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
