import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { User } from 'src/app/security/models/user.model';
import { Friend } from '../models/friend.model';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  friends: Observable<any[]>;
  allUsers: Observable<User[]>;
  verzoeken: Observable<any[]>;
  verzoekVriend: Friend;

  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService) {
    this.haalAlleUsersOp();
    this.haalVriendenOp();
  }

  haalVriendenOp(){
    this.friends = this._friendService.getFriendsUser(parseInt(localStorage.getItem('userid')));
  }

  haalAlleUsersOp(){
    this.allUsers = this._authenticateService.getAllUsers();
  }

  haalVriendschapsverzoekenOp(){
    this.verzoeken = this._friendService.getVriendVerzoeken(parseInt(localStorage.getItem('userid')));
  }

  stuurVerzoek(friendid){
    console.log(friendid);
    this.verzoekVriend.status = 1;
    this.verzoekVriend.userID = parseInt(localStorage.getItem('userid'));
    this.verzoekVriend.userIDFriend = parseInt(friendid);

    this._friendService.stuurVerzoek(this.verzoekVriend);
  }

  ngOnInit() {
  }

}
