import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule'}
];