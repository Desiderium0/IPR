import { Routes } from '@angular/router';
import { ObjectList } from './object-list';
import { ObjectItem } from '../object-item/object-item/object-item';
import { Page404 } from 'src/app/shared/components/page404/page404';

export const routes: Routes = [
  {
    path: '',
    component: ObjectList,
  },
  {
    path: ':id',
    component: ObjectItem,
  },
  {
    path: '**',
    component: Page404,
  },
];
