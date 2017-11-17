import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/models.model';
import { UserService } from '../../services/users.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser = {id:0,name:'',password:'', friends:[]};
  friends: IUser[] = [];
  suggestedFriends: IUser[] = [];
  loggedUser: IUser;
  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loggedUser = this.service.loggedUser;
    this.route.paramMap
    .switchMap((params: ParamMap) => this.service.getUserById(+params.get('id')))
    .subscribe(user => {this.user = user; 
              this.loadFriends(user.friends);
              this.loadSuggestedFriends();});
    
  }

  loadFriends(friendsIds){
    this.friends=[];
   friendsIds.forEach(id => {
    this.service.getUserById(id)
    .subscribe(user => this.friends.push(user)); 
   });
  }

  loadSuggestedFriends(){
    this.suggestedFriends=[];
    this.service.getUsers()
    .subscribe(users => /*this.suggestedFriends = users*/{
     /* let difference = users.filter(x => this.friends.indexOf(x) == -1);
      this.suggestedFriends = difference;*/  
      let suggested = _.differenceBy(users, this.friends, 'id');
      this.suggestedFriends = _.differenceBy(suggested, [this.user], 'id');
    }); 
  }

  onSelectFriend(friend: IUser){
    this.router.navigate(["home/profile/", friend.id]);
  }

  addFriend(friend: IUser){
    let sarasa = _.differenceBy(this.suggestedFriends, [friend], 'id');
    this.suggestedFriends = sarasa;
    this.friends.push(friend);
  }

}
