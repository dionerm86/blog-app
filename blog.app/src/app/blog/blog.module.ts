import { CommonMaterialModule } from './../common/material/commonMaterialModules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './posts/postModule';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    HttpClientModule,
    CommonMaterialModule
  ],
  providers:[
  ],
  exports:[
    PostModule,
    CommonMaterialModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class BlogModule { }
