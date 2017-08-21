import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post;
  @Input() curIndex;
  postsService: PostsService;

  constructor(postsService: PostsService, private router: Router) {
    this.postsService = postsService;
    this.router = router;
  }

  ngOnInit() {
  }

}
