import { Module } from '@nestjs/common';
import { PostService } from './service/post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'blogApp',
        entities: [__dirname + '/**/*Entity{.ts,.js}'],
        synchronize: true,
      }),
    ],
    controllers: [
      PostController
    ],
    providers:[
      PostService
    ]
  })
export class BlogModule {}
