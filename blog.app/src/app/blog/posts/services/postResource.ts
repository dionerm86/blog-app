import { PostListItem } from './dataModel/postListItem';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiConfig } from '../../Api.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostResource {
  private readonly URL = ApiConfig.url + '/post';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<PostListItem[]>{
    return this.http.get(this.URL) as Observable<PostListItem[]>;
  }
}
