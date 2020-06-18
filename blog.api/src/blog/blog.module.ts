import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './post.controller';

@Module({
    imports: [],
    controllers: [
      PostController
    ],
    providers:[
      PostService
    ]
  })
export class BlogModule {}
