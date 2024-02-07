import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products.routing";
import {CardModule} from "../../components/card/card.module";

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    CardModule
  ]
})
export class ProductsModule { }
