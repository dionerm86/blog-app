import { finalize } from 'rxjs/operators';
import { AuthService } from './../common/auth/service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../common/user/dataModel/user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user : UserLogin = {} as UserLogin;

  public isLoading = false;

  constructor(private readonly authService: AuthService,
              private readonly router: Router) { }

  onSubmit(formLogin: NgForm){
    if (formLogin.valid) {
      this.isLoading = true;
      this.authService.signIn(this.user)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(() => this.router.navigate(['blog', 'list']));
    }
  }

}
