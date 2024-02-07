import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public form = new FormGroup({
    "login": new FormControl(),
    "password": new FormControl()
  })
  private observable: Subscription | undefined;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  public ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public onSubmit() {
    this.observable = this.auth.login().subscribe((data: object) => {
        this.router.navigate(['/products'])
      },
      error => console.log(error))
  }

  public ngOnDestroy() {
    if (this.observable) {
      this.observable.unsubscribe()
    }
  }
}
