import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from './posts/postModule';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostModule,
    HttpClientModule
  ],
  providers:[
  ],
  exports:[
    PostModule
  ]
})
export class BlogModule { }
