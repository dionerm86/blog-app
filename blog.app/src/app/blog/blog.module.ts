import { PostService } from './service/post.service';
import { PostResourceService } from './service/post-resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from './list/post-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostListModule
  ],
  providers:[
    PostResourceService,
    PostService
  ],
  exports:[
    PostListModule
  ]
})
export class BlogModule { }
