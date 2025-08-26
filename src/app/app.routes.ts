import { Routes } from '@angular/router';
import { Adaptives } from './pages/adaptives/adaptives';
import { CustomValidator } from './pages/custom-validator/custom-validator';
import { Page404 } from './shared/components/page404/page404';
import { ObjectList } from './pages/object-list/object-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-one',
    pathMatch: 'full',
  },
  {
    path: 'c-validation',
    component: CustomValidator,
  },
  {
    path: 'page-one',
    component: Adaptives,
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('./pages/object-list/object-list.routes').then((m) => m.routes),
  },
  {
    path: '**',
    component: Page404,
  },
];
