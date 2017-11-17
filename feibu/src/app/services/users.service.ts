import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { IUser } from '../model/models.model';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  usersUrl = `http://localhost:3000/users`;
  loggedUser: IUser;
  constructor(private http:Http) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get(this.usersUrl)
               .map((res) => res.json());
  }
  getUser(name: string): Observable<IUser> {
    const url = this.usersUrl+'?name=' + name;
    return this.http.get(url)
      .map((res) => res.json()[0]);
  }
  getUserById(id: number): Observable<IUser> {
    const url = this.usersUrl + '/' + id;
    //alert(url)
    return this.http.get(url)
      .map((res) => res.json());
  }
}
