import { CommonMaterialModule } from './../../../common/material/commonMaterialModules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist.component';

@NgModule({
  declarations: [
    PostlistComponent
  ],
  imports: [
    CommonModule,
    CommonMaterialModule
    ],
  exports:[
    PostlistComponent
  ]
})
export class PostListModule { }
