import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.posts;
  }
}
