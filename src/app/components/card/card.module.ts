import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CardComponent} from "./card.component";
import {ReverseCurrencyPipe} from "../../pipes/reverse-currency.pipe";
import {ColorDirective} from "../../directives/color.directive";

@NgModule({
  declarations: [
    CardComponent,
    ReverseCurrencyPipe,
    ColorDirective
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [CurrencyPipe],
})
export class CardModule { }
