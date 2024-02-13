import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public form = new FormGroup({
    'login': new FormControl(), // тут кавычки ваще не нужные и инит формы есть ниже
    'password': new FormControl() // тут кавычки ваще не нужные и инит формы есть ниже
  });
  private observable: Subscription | undefined;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  public ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit() {
    this.auth.login().subscribe((_data: object) => { // а если понадобится сделать еще одну подписку?
        this.router.navigate(['/products']);
      },
      error => console.log(error));
  }

  public ngOnDestroy() {
    if (this.observable) {
      this.observable.unsubscribe();
    }
  }
}
