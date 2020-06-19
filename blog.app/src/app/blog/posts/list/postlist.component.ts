import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { PostListItem } from '.././services/dataModel/postListItem';

@Component({
  selector: 'app-post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'title', 'subTitle', 'imgUrl'];
  public postList: Observable<PostListItem[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postList = this.postService.getAllPostItems();
  }

}
