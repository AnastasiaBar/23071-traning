import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  // главная страница
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
