import { Controller, Get } from '@nestjs/common';
import { Observable } from "rxjs";
import { PostModel } from "./models/Post";
import { PostService } from './service/post.service';

@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    @Get()
    findAll(): Observable<PostModel[]> {
        return this.postService.findAll();
    };
}
