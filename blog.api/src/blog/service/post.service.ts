import { CreatePostDto } from './../Dtos/createPostDto';
import { EditPostDto } from './../Dtos/editPostDto';
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';
import { PostDto } from '../Dtos/postDto';
import { map } from "rxjs/operators";
import * as _ from 'lodash';

@Injectable()
export class PostService {
    
    constructor( @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {        
    }

    public findAll(): Observable<PostEntity[]> {

        return from(this.postRepository.find())
        .pipe(
            map((posts) => _.orderBy(posts, ['id'], ['desc'])),            
        );         
    };

    public create(createPostDto: CreatePostDto) : Promise<PostDto> {
        
        return this.postRepository.save(createPostDto);
    }

    public edit(editPostDto: EditPostDto) : Promise<PostEntity> {
        
        return this.postRepository.save(editPostDto);
    }

    public delete(postId: number) {
        
        this.postRepository.delete(postId);
    }
    

    
}
