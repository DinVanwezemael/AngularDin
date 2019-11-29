import { Component, OnInit } from '@angular/core';
import { User } from '../security/models/user.model';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FriendService } from '../friend/services/friend.service';
import { Observable } from 'rxjs';
import { PollService } from '../polls/services/poll.service';
import { PollDto } from '../polls/models/poll-dto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  naam
  currentUser: User;
  verzoeken: Observable<any[]>;
  verzoeken_: any[];
  uitgenodigdePolls: Observable<PollDto[]>
  uitgenodigdePolls_: any[];
  zelfgemaaktePolls: Observable<PollDto[]>;
  vrienden: Observable<any[]>;

  constructor(private router: Router, private appcomponent: AppComponent, private _friendService: FriendService, private _pollService: PollService) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalVriendschapsverzoekenOp();
    this.haalUitgenodigdePollsOp();
    this.haalZelfgemaaktePollsOphalen();
    this.haalVriendenOp();


    this.naam = localStorage.getItem('username');

    this.appcomponent.id = localStorage.getItem('userid');
  }

  haalVriendschapsverzoekenOp(){
    this.verzoeken = this._friendService.getVriendVerzoeken(parseInt(localStorage.getItem('userid')));
  }

  haalUitgenodigdePollsOp(){
    this.uitgenodigdePolls = this._pollService.uitgenodigdePolls(parseInt(localStorage.getItem('userid')));
  }

  haalZelfgemaaktePollsOphalen(){
    this.zelfgemaaktePolls = this._pollService.getPollByUser(parseInt(localStorage.getItem('userid')));
  }

  haalVriendenOp(){
    this.vrienden = this._friendService.getFriendsUser(parseInt(localStorage.getItem('userid')), );
  }

  goToUP(){
    this.router.navigate(['/uitgenodigde-polls']);
  }

  goToNieuweVriendVerzoeken(){
    this.router.navigate(['/vriend-verzoek']);
  }

  goToZelfgemaaktePolls(){
    this.router.navigate(['/polls']);
  }

  goToVrienden(){
    this.router.navigate(['/friend']);
  }

  ngOnInit() {
  }

}
