import { Observable } from 'rxjs';
import { PostDto } from './../../../../../../blog.api/src/blog/Dtos/postDto';
import { BehaviorSubject } from 'rxjs';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreatePostDialogComponent } from '../dialogs/createPostDialog.component';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { EditPostDto } from '../services/dataModel/EditPostDto';

@Component({
  selector: 'app-post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public isLoading = false;

  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imgUrl'];

  private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

  constructor(private postService: PostService, private matDialog: MatDialog) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getAllPostItems()
        .pipe(finalize(() => this.isLoading = false))
        .subscribe((postListItem : any) => this.postListSubject.next(postListItem));
  }

  public getPostList(): Observable<PostDto[]> {
    return this.postListSubject.asObservable();
  }

  public editPost(editPostDto: EditPostDto) {
    console.log(editPostDto);
    this.postService.editPost(editPostDto)
                    .subscribe((res) => console.log(res));
  }

  public createPost() {

    const ref = this.matDialog.open(CreatePostDialogComponent, {
      width: '600px',
    });

    ref.afterClosed().subscribe((newPost: PostDto)=> {
      if (newPost) {
        const list = this.postListSubject.getValue();
        list.push(newPost);
        this.postListSubject.next(_.cloneDeep(list));
      };
    });
  }

}
