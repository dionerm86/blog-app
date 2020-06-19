import { PostListModule } from './list/post-list.module';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { PostResource } from './services/postResource';

@NgModule({
  imports: [
    PostListModule
  ],
  exports:[
    PostListModule
  ],
  declarations: [],
  providers:[
    PostService,
    PostResource
  ]
})
export class PostModule { }
