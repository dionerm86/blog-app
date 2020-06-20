import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from './../../common/material/commonMaterialModules';
import { PostListModule } from './list/post-list.module';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { PostResource } from './services/postResource';
import { CreatePostDialogComponent } from "./dialogs/createPostDialog.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PostListModule,
    FormsModule,
    CommonMaterialModule
  ],
  exports:[
    PostListModule
  ],
  declarations: [
    CreatePostDialogComponent
  ],
  entryComponents: [
    CreatePostDialogComponent
  ],
  providers:[
    PostService,
    PostResource
  ]
})
export class PostModule { }
