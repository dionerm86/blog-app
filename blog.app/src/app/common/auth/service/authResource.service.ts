import { ApiConfig } from './../../Api.config';
import { AuthToken } from './../dataModel/authToken';
import { Observable, of } from 'rxjs';
import { UserLogin } from './../../user/dataModel/user-login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthResource {

  private readonly URL = ApiConfig + '/auth';
  public signIn(user: UserLogin) : Observable<AuthToken> {
    return of({expires_in: 16000, token: 'aSecreteTokenString'});
  }
  constructor(private readonly http: HttpClient) { }

}
