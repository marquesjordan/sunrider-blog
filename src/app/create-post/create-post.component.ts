import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.postsService.addPost(form.value);
  }
}
