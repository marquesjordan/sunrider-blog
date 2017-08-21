import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Router} from '@angular/router';

@Injectable()
export class PostsService {
  private posts = [
    {
      id: 1,
      title: 'Blog Post 1',
      author: '',
      category: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date()
    },
    {
      id: 2,
      title: 'Blog Post 2',
      category: '',
      author: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date()
    },
    {
      id: 3,
      title: 'Blog Post 3',
      category: '',
      author: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date()
    },
    {
      id: 4,
      title: 'Blog Post 4',
      category: '',
      author: '',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      createdDate: new Date()
    }
  ];

  postListChanged = new Subject<void>();

  constructor(private router: Router) {
    this.router = router;
  }

  getCategoryBlogPosts(category) {
    if (category === 'all') {
      return this.posts.slice().reverse();
    }

    const catergoryList = this.posts.filter( (post) => {
      return post.category === category;
    });

    return catergoryList.reverse();
  }

  addPost(formValue) {
    const category = formValue.category || '';
    const author = formValue.author || 'Admin';
    const newPostId = this.getCategoryBlogPosts('all').length + 1;

    const newPost = {
      id: newPostId,
      title: formValue.title,
      category: category,
      author: author,
      content: formValue.content,
      createdDate: new Date()
    };

    this.posts.push(newPost);
    this.postListChanged.next();
    this.router.navigateByUrl('/posts');
  }

  getPost(postId) {
    const postIndex = this.posts.findIndex(
      (post) => {
        return post.id === postId;
      }
    );

    if ( postIndex !== -1) {
      return this.posts[postIndex];
    }

    return;

  }

  editPost(formValue, postId) {
    const postIndex = this.posts.findIndex(
      (post) => {
        return post.id === postId;
      }
    );

    if ( postIndex !== -1) {
      this.posts['title'] = formValue.title;
      this.posts['content'] = formValue.content;
    }

    this.postListChanged.next();
    this.router.navigateByUrl(`/post/${postId}`);
  }

  deletePost(postId) {
    const postIndex = this.posts.findIndex(
      (post) => {
        return post.id === postId;
      }
    );

    if ( postIndex !== -1) {
      this.posts.splice(postIndex, 1);
    }

    this.postListChanged.next();
    this.router.navigateByUrl('/posts');
  }

}
