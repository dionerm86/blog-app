import { map } from 'rxjs/operators';
import { AuthToken } from './../dataModel/authToken';
import { AuthResource } from './authResource.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../user/dataModel/user-login';
import { Router } from "@angular/router";
import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class AuthService {

  private readonly AUTH_STORAGE_KEY = 'auth_token';

  constructor(private readonly resource: AuthResource,
              private readonly router: Router) { }

  public signIn(user: UserLogin) : Observable<void> {
    return this.resource.signIn(user)
      .pipe(
        map((authToken) => {
          this.storeToken(authToken);
          return;
        })
      );
  }

  public logOut() {
    this.cleanToken();
    this.router.navigate(['login']);
  }

  private cleanToken() {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
  }

  private storeToken(auhToken: AuthToken) {
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(auhToken));
  }

  private loadToken() : AuthToken {
    try {
      return JSON.parse(localStorage.getItem(this.AUTH_STORAGE_KEY));
    }
    catch {
      console.error("Bad JSON format for token item");
    }
  }

  isAuthorized() : boolean {
    return !_.isEmpty(this.loadToken());
  }


}
