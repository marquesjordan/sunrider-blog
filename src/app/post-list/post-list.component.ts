import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [];
  postsService: PostsService;
  subscription;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  ngOnInit() {
    this.posts = this.postsService.getCategoryBlogPosts('all');
    this.subscription = this.postsService.postListChanged.subscribe(
      () => {
        this.posts = this.postsService.getCategoryBlogPosts('all');
      }
    );

  }

}
