import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';
import { IUser } from '../../model/models.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { }
  user: IUser; 
  ngOnInit() {
    this.user = this.userService.loggedUser;
  }

}
