import { Injectable } from '@nestjs/common';
import { PostModel } from '../models/Post';
import { Observable, of } from 'rxjs';
import { MockedPosts } from "../mocks/mockedPost";

@Injectable()
export class PostService {

    public findAll(): Observable<PostModel[]> {

        return of(MockedPosts);         
    };
}
