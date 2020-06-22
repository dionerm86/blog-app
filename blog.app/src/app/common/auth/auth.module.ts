import { NgModule } from '@angular/core';
import { AuthResource } from './service/authResource.service';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AuthResource,
    AuthService
  ],
})
export class AuthModule { }
