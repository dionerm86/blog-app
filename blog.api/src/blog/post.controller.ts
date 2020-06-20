import { Controller, Get, Post, Body } from '@nestjs/common';
import { Observable } from "rxjs";
import { PostService } from './service/post.service';
import { PostEntity } from './entities/postEntity';
import { CreatePostDto } from './Dtos/createPostDto';
import { PostDto } from './Dtos/postDto';

@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    };

    @Post()
    create(@Body() createPostDto: CreatePostDto) : Promise<PostDto> {
        
        return this.postService.create(createPostDto);
    }
}
