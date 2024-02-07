import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isAuth()) {
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }
}
