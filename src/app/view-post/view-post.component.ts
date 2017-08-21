import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  postsService: PostsService;
  post = {};

  constructor(activatedRoute: ActivatedRoute, postsService: PostsService) {
    this.activatedRoute = activatedRoute;
    this.postsService = postsService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.post = this.postsService.getPost(+params.id);
      }
    );
  }

  onDeleteButtonClick(postId) {
    this.postsService.deletePost(postId);
  }


}
