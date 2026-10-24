import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'The Funky Vino — Natural Wine Bar',
  },
  { path: '**', redirectTo: '' },
];
