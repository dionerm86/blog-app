import { Observable } from 'rxjs';
import { PostResource } from './postResource';
import { Injectable } from '@angular/core';
import { PostDto } from './dataModel/postDto';
import { CreatePostDto } from './dataModel/createPostDto';
import { EditPostDto } from './dataModel/EditPostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResource) {
  }

  public getAllPostItems(): Observable<PostDto[]> {
    return this.postResource.findAll();
  }

  public createPost(createPostDtio: CreatePostDto) : Observable<CreatePostDto> {

    return this.postResource.create(createPostDtio);
  }

  public editPost(editPostDto: EditPostDto) : Observable<EditPostDto> {

    return this.postResource.edit(editPostDto);
  }
}
