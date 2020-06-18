import { PostResource } from './service/postResource';
import { PostService } from './service/post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostListModule,
    HttpClientModule
  ],
  providers:[
    PostService,
    PostResource
  ],
  exports:[
    PostListModule
  ]
})
export class BlogModule { }
