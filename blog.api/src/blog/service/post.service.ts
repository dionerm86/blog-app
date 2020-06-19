import { CreatePostDto } from './../Dtos/createPostDto';
import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';

@Injectable()
export class PostService {
    
    constructor( @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {        
    }

    public findAll(): Observable<PostEntity[]> {

        return from(this.postRepository.find())         
    };

    public create(createPostDto: CreatePostDto) {
        
        this.postRepository.save(createPostDto)
    }
}
