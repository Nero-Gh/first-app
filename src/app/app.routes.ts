import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { RestaurantItemsComponent } from './components/restaurant-items/restaurant-items.component';
import { LoginComponent } from './components/login/login.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'restaurant-items/:categoryname',
    component: RestaurantItemsComponent,
  },
  {
    path: 'create-order',
    component: CreateOrderComponent,
  },
];
