import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { User } from 'src/app/security/models/user.model';
import { Friend } from '../models/friend.model';
import { AddFriend } from '../models/add-friend.model';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  friends: Observable<any[]>;
  allUsers: Observable<User[]>;
  verzoeken: Observable<any[]>;


  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService, private router: Router, private appComponent: AppComponent) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalAlleUsersOp();
    this.haalVriendenOp();
    this.haalVriendschapsverzoekenOp();
  }

  

  haalVriendenOp(){
    this.friends = this._friendService.getFriendsUser(parseInt(localStorage.getItem('userid')));
  }

  haalAlleUsersOp(){
    this.allUsers = this._authenticateService.getAllUsers(parseInt(localStorage.getItem('userid')));
  }

  haalVriendschapsverzoekenOp(){
    this.verzoeken = this._friendService.getVriendVerzoeken(parseInt(localStorage.getItem('userid')));
  }

  stuurVerzoek(friend){

    let verzoekVriend: AddFriend = {
      status: 1,
      userID: parseInt(localStorage.getItem('userid')),
      userFriendID: friend.userID
    }

    this._friendService.stuurVerzoek(verzoekVriend).subscribe();

  }

  accepteerVerzoek(friend){

    let accepteerVriend: Friend = {
      friendID: friend.friendID,
      username: friend.username,
      status: 2,
      userID: friend.userID,
      userFriendID: friend.userFriendID
    }

    this._friendService.accepteerVerzoek(accepteerVriend).subscribe();

  }

  verwijderVriend(friend){
    this._friendService.verwijderVriend(friend.reference).subscribe(
      result => {
        this.appComponent.setAlert(friend.username + " is verwijderd van je vriendenlijst!", "danger");
        this.haalVriendenOp();
      }
    );
  }
  

  ngOnInit() {
  }

}
