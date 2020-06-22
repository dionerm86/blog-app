import { BlogRounting } from './blog.routing';
import { RouterModule } from '@angular/router';
import { CommonMaterialModule } from '../common/material/commonMaterial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './posts/postModule';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { BlogGuard } from './guards/blogGuards';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    HttpClientModule,
    CommonMaterialModule,
    RouterModule.forChild(BlogRounting)
  ],
  providers:[
    BlogGuard
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
