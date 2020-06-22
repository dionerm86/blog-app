import { Observable } from 'rxjs';
import { PostDto } from './dataModel/postDto';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../../../common/Api.config';
import { HttpClient } from '@angular/common/http';
import { CreatePostDto } from './dataModel/createPostDto';
import { EditPostDto } from './dataModel/EditPostDto';

@Injectable()
export class PostResource {

  private readonly URL = ApiConfig.url + '/post';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<PostDto[]>{
    return this.http.get(this.URL) as Observable<PostDto[]>;
  }

  public create(createPostDto: CreatePostDto) : Observable<CreatePostDto> {

    return this.http.post(this.URL, createPostDto) as Observable<CreatePostDto>;
  }

  public edit(editPostDto: EditPostDto) : Observable<PostDto> {
    return this.http.put(this.URL, editPostDto) as Observable<PostDto>;
  }

  public delete(postId) : Observable<any> {
    return this.http.delete(this.URL + "/" + postId);
  }
}
