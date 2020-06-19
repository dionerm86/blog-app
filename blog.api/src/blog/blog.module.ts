import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/postEntity';

@Module({
    imports: [
      TypeOrmModule.forFeature([PostEntity])
    ],
    controllers: [
      PostController
    ],
    providers:[
      PostService
    ]
  })
export class BlogModule {}
