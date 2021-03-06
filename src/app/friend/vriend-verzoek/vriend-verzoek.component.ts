import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Observable } from 'rxjs';
import { Friend } from '../models/friend.model';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vriend-verzoek',
  templateUrl: './vriend-verzoek.component.html',
  styleUrls: ['./vriend-verzoek.component.scss']
})
export class VriendVerzoekComponent implements OnInit {
  
  verzoeken: Observable<any[]>;

  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService, private router: Router, private appComponent: AppComponent) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalVriendschapsverzoekenOp();
  }

  haalVriendschapsverzoekenOp(){
    this.verzoeken = this._friendService.getVriendVerzoeken(parseInt(localStorage.getItem('userid')));
  } 

  //accepteren van verzoek = status op 2 zetten -> is gelijk aan een vriendschap
  accepteerVerzoek(friend){

    let accepteerVriend: Friend = {
      friendID: friend.friendID,
      username: friend.username,
      status: 2,
      userID: friend.userID,
      userFriendID: friend.userFriendID
    }

    //tonen van alert en verzoeken opnieuw ophalen
    this._friendService.accepteerVerzoek(accepteerVriend).subscribe(result => {
      this.appComponent.setAlert("Je hebt het vriendschapsverzoek van " + friend.username + " succesvol geaccepteerd!", "success");
      this.haalVriendschapsverzoekenOp();
    }
      
    );
  }

  //verwijderen van vriend + tonen van alert
  verwijderVerzoek(friend){
    this._friendService.verwijderVerzoek(friend.friendID).subscribe(result => {
      this.appComponent.setAlert("Je hebt het vriendschapsverzoek van " + friend.username + " geweigerd!", "danger");
      this.haalVriendschapsverzoekenOp();
    }
      
    );
  }

  ngOnInit() {
  }

}
