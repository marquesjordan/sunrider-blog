import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
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

  onSubmit(form) {
    this.postsService.editPost(form.value, this.post['id']);
  }

}
