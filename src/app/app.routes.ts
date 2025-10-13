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
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
