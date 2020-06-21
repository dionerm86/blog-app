import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BlogGuard implements CanActivate {

  constructor(private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const isUserAutorized = false;

    if (!isUserAutorized) {
      this.router.navigate(['login']);
    }
    return of(isUserAutorized);
  };
}
