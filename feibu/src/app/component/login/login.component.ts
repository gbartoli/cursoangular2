import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/users.service';
import { IUser } from '../../model/models.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private service: UserService,  private router: Router, private authservice: AuthService) { }
   user: IUser = {id:0,name:'',password:'', friends:[]};
   //loggedUser: IUser;
   message: string;
  ngOnInit() {
  }

  login(){
    this.service.getUser(this.user.name).subscribe(user => {
      this.authservice.isLoggedIn = false;
      if(!user){
        this.message = 'Invalid user name';
      }else
      if(user.password === this.user.password)
      {
        this.authservice.isLoggedIn = true;
        this.service.loggedUser = user;
        this.message = "";
        this.router.navigate(["/home/"]);
      }
      else{
        this.message ="Invalid Password";
      }
    });    
  }

}
