import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../common/material/commonMaterialModules';
import { LoginRouts } from './login.routes';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule,
    RouterModule.forChild(LoginRouts)
  ]
})
export class LoginModule { }
