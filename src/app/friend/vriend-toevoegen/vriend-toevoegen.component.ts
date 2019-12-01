import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/security/models/user.model';
import { Router } from '@angular/router';
import { AddFriend } from '../models/add-friend.model';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vriend-toevoegen',
  templateUrl: './vriend-toevoegen.component.html',
  styleUrls: ['./vriend-toevoegen.component.scss']
})
export class VriendToevoegenComponent implements OnInit {


  allUsers: Observable<User[]>;

  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService, private router: Router, private appComponent: AppComponent) {
    //controle als gebruiker is ingelogd
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalAlleUsersOp();
  }

  haalAlleUsersOp(){
    this.allUsers = this._authenticateService.getAllUsers(parseInt(localStorage.getItem('userid')));
  }

  //verzoek versturen
  stuurVerzoek(friend){

    //status 1 is gelijk aan een verzoek
    let verzoekVriend: AddFriend = {
      status: 1,
      userID: parseInt(localStorage.getItem('userid')),
      userFriendID: friend.userID
    }

    //tonen van alert en users opnieuw ophalen
    this._friendService.stuurVerzoek(verzoekVriend).subscribe(
      result => {
        this.appComponent.setAlert("Je vriendschapsverzoek naar " + friend.username + " is verstuurd!", "success");
        this.haalAlleUsersOp();
      }
    );

  }

  ngOnInit() {
  }


}
