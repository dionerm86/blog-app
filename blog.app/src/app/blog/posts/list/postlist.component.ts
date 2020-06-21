import { CreatePostDialogComponent } from './../dialogs/createPostDialog.component';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { PostDto } from '../services/dataModel/postDto';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public isLoading = false;

  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imgUrl', 'action'];

  private postListSubject: BehaviorSubject<PostDto[]> = new BehaviorSubject(null);

  constructor(private postService: PostService,
              private matDialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getAllPostItems()
    .pipe(finalize(() => this.isLoading = false))
    .subscribe((postListItem : any) => this.postListSubject.next(postListItem));
  }

  public getPostList(): Observable<PostDto[]> {
    return this.postListSubject.asObservable();
  }

  public editPost(editPost: EditPostDto) {
    const ref = this.matDialog.open(CreatePostDialogComponent, {
      width: '600px',
      data: {editPostDto: editPost}
    })

    ref.afterClosed().subscribe((editedPost: PostDto) => {
      if (editedPost) {
        const list = this.postListSubject.getValue();
        const postIndex = _.findIndex(list, post => post.id === editedPost.id);
        list[postIndex] = editedPost;

        list.push(editedPost);
        this.postListSubject.next(_.cloneDeep(list));
      };
    });
  };

  public deletePost(postDto: PostDto) {
    const ref = this.matDialog.open(ConfirmationDialogComponent);
    ref.afterClosed().subscribe((canContinu) => {
      if (canContinu) {
        this.isLoading = true;
        this.postService.deletePost(postDto.id)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe( () => {
          const list = this.postListSubject.getValue();
          _.remove(list, post => post.id === postDto.id);
          this.postListSubject.next(_.cloneDeep(list));

          this.snackBar.open(`Post ${postDto.title} has been deleted`, null, {
            duration: 2000,
          });
        }
        );
      }
    } )
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
