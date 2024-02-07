import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth.routing";

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
