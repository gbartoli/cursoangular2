import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost, IUser, Post } from '../../model/models.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service: PostsService, private router: Router, private userService:UserService) { }
  posts: IPost[];
  loggedUser:IUser = this.userService.loggedUser;
  newPost:IPost;
  ngOnInit() {
    this.loadPosts();
    this.newPost = new Post();
  }

  loadPosts(){
    this.service.getPosts().subscribe(posts => {
      this.posts = posts;
    });    
  }

  addPost(){
    this.newPost.author = this.userService.loggedUser;
    this.posts.unshift(this.newPost);
    this.newPost = new Post();
  }

  onSelectAuthor(author: IUser){
    this.router.navigate(["home/profile/", author.id]);
  }

}
