import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    children: [
      {
        path: '',
        component: SuppliersListComponent
      },
      {
        path: 'show/:id',
        component: SuppliersShowComponent
      },
      {
        path: 'edit/:id',
        component: SuppliersEditComponent
      },
      {
        path: 'del/:id',
        component: SuppliersDeleteComponent
      },
      {
        path: 'new',
        component: SuppliersNewComponent
      }
    ]
  },
  {
    path: '', component: ProductsComponent, children: [
      {
        path: '',
        component: ProductsListComponent
      },
    ]
  },
  { path: 'checkout', component: CheckoutComponent },

];
