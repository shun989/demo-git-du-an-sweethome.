import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
