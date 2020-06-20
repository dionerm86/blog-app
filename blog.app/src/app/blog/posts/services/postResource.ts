import { Observable } from 'rxjs';
import { PostListItem } from './dataModel/postListItem';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../../Api.config';
import { HttpClient } from '@angular/common/http';
import { CreatePostDto } from './dataModel/createPostDto';

@Injectable()
export class PostResource {
  private readonly URL = ApiConfig.url + '/post';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<PostListItem[]>{
    return this.http.get(this.URL) as Observable<PostListItem[]>;
  }

  public create(createPostDto: CreatePostDto) : Observable<CreatePostDto> {

    return this.http.post(this.URL, createPostDto) as Observable<CreatePostDto>;
  }
}
