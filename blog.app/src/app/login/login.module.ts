import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../common/material/commonMaterial.module';
import { LoginRouts } from './login.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CommonMaterialModule,
    RouterModule.forChild(LoginRouts)
  ]
})
export class LoginModule { }
