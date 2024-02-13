import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import { Observable } from 'rxjs';

interface UserResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token = '';

  constructor(private http: HttpClient) {
  }

  public login(): Observable<UserResponse> {
    return this.http.get<UserResponse>('assets/user.json').pipe(
      tap(({ token }) => {
        localStorage.setItem('user', JSON.stringify(token));
        this.setToken(token)
      })
    );
  }

  public setToken (token: string){
    this.token = token;
  }

  public isAuth(){
    return this.token;
  }

  public logout(){
    this.setToken('')
    localStorage.setItem('user', JSON.stringify(this.token));
  }
}
