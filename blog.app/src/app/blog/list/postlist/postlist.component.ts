import { Observable } from 'rxjs';
import { PostService } from '../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { PostListItem } from '../../service/dataModel/postListItem';

@Component({
  selector: 'app-post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public postList: Observable<PostListItem[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postList = this.postService.getAllPostItems();
  }

}
