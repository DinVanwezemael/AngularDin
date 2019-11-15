import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend.model';

@Component({
  selector: 'app-vriend-verzoek',
  templateUrl: './vriend-verzoek.component.html',
  styleUrls: ['./vriend-verzoek.component.scss']
})
export class VriendVerzoekComponent implements OnInit {
  
  verzoeken: Observable<any[]>;

  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService) {
    this.haalVriendschapsverzoekenOp();
  }

  haalVriendschapsverzoekenOp(){
    this.verzoeken = this._friendService.getVriendVerzoeken(parseInt(localStorage.getItem('userid')));
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

  ngOnInit() {
  }

}
