import { Component, OnInit } from '@angular/core';
import { CreatePostDto } from '../services/dataModel/createPostDto';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: 'createPostDialog.html'
})

export class CreatePostDialogComponent implements OnInit {

  public isLoading = false;

  public newPostDto: CreatePostDto = {} as CreatePostDto

  constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
              private postService: PostService) { }

  ngOnInit() { }

  public Submit(ngForm: NgForm) {
    if (ngForm.valid) {
       this.isLoading = true;
       this.postService.createPost(this.newPostDto)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((response) => {
          console.log(response);
          this.dialogRef.close(response);
      }, error => {
          console.log('Erro no método post', error);
      });
    }
  }
}

