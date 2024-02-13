import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent  implements OnInit, OnDestroy{

  public productsList: Object = [];
  public productsList$: Observable<Object> | undefined;
  private observable: Subscription | undefined;
  protected readonly ObjectList = Object;

  constructor(private auth: AuthService,
              private api: ApiService,
              private route: Router,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnInit (){
    this.productsList$ = this.api.getProducts(); // можно избавится от лишнего кода и cdr
    this.observable = this.api.getProducts().subscribe((data: Object) => {
      this.productsList = data;
      this.cdr.markForCheck();
    })
  }

  public logout(){
    this.auth.logout()
    this.route.navigate(['/'])
  }

  public ngOnDestroy() {
    if (this.observable) {
      this.observable.unsubscribe()
    }
  }
}
