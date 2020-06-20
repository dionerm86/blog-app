import { Observable } from 'rxjs';
import { PostResource } from './postResource';
import { Injectable } from '@angular/core';
import { PostListItem } from './dataModel/postListItem';
import { CreatePostDto } from './dataModel/createPostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResource) {
  }

  public getAllPostItems(): Observable<PostListItem[]> {
    return this.postResource.findAll();
  }

  public createPost(createPostDtio: CreatePostDto) : Observable<CreatePostDto> {

    return this.postResource.create(createPostDtio);
  }
}
