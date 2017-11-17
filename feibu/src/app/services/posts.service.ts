import { Injectable } from '@angular/core';
import { IPost } from '../model/models.model';
import { Observable }     from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostsService {

  postsUrl = `http://localhost:3000/posts`;
  constructor(private http:Http) { }
  getPosts(): Observable<IPost[]> {
    return this.http.get(this.postsUrl)
               .map((res) => res.json());
  }
/*
  addPosts(post: IPost): Observable<IPost[]> {
    return this.http.post(this.postsUrl,null,post)
               .map((res) => res.json());
  }*/
  /*
  getUserById(id: number): Observable<IUser> {
    const url = this.usersUrl + '/' + id;
    //alert(url)
    return this.http.get(url)
      .map((res) => res.json());
  }*/

}
