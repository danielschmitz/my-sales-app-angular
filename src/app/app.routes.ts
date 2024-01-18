import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooComponent } from './foo/foo.component';

export const routes: Routes = [
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'',
    component: FooComponent
  },
];
