import { PostDto } from './../services/dataModel/postDto';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { CreatePostDto } from '../services/dataModel/createPostDto';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPostDto } from '../services/dataModel/EditPostDto';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: 'createPostDialog.html'
})

export class CreatePostDialogComponent implements OnInit {

  public postModel: CreatePostDto | EditPostDto = {} as CreatePostDto;

  public isLoading = false;

  public isEditing = false;

  constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {editPostDto: EditPostDto},
              private postService: PostService) { }

  ngOnInit() {
    this.isEditing = !!_.get(this.data, 'editPostDto');
    if (this.isEditing) {
      this.postModel = _.cloneDeep(this.data.editPostDto);
    }
  }

  public Submit(ngForm: NgForm) {
    if (ngForm.valid) {
      this.isLoading = true;
      this.handleAfterSubmit(
          this.isEditing ?
          this.postService.editPost(this.postModel) :
          this.postService.createPost(this.postModel as CreatePostDto)
      );
    }
  }

  private handleAfterSubmit(observable: Observable<PostDto>) {
    return observable
        .pipe(finalize(() => this.isLoading = false))
        .subscribe((response) => {
            this.dialogRef.close(response);
        }, error => {
            console.log('Erro no método post', error);
        });

  }
}

