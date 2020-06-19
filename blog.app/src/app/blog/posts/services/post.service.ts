import { PostResource } from './postResource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostListItem } from './dataModel/postListItem';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postResource: PostResource) {
  }

  public getAllPostItems(): Observable<PostListItem[]> {
    return this.postResource.findAll();
  }
}
