import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { Observable } from "rxjs";
import { PostService } from './service/post.service';
import { PostEntity } from './entities/postEntity';
import { CreatePostDto } from './Dtos/createPostDto';
import { PostDto } from './Dtos/postDto';
import { EditPostDto } from './Dtos/editPostDto';
import { DeletePostDto } from './Dtos/deletePostDto';

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

    @Put()
    edit(@Body() editPostDto: EditPostDto) : Promise<PostDto> {
        
        return this.postService.edit(editPostDto);
    }

    @Delete(":id")
    delete(@Param() postId: number) {
        
        return this.postService.delete(postId);
    }
}
