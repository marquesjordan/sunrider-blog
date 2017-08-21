import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostNavComponent } from './post-nav/post-nav.component';
import { PostsService } from './posts.service';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', name: 'ViewPost', component: ViewPostComponent },
  { path: 'post/edit/:id', name: 'ViewPost', component: EditPostComponent },
  { path: 'new-post', component: CreatePostComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePostComponent,
    PostListComponent,
    PostListItemComponent,
    PostNavComponent,
    ViewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
