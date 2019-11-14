import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PollService } from '../services/poll.service';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { PollUser } from '../models/poll-user.model';
import { first } from 'rxjs/operators';
import { PollDto } from '../models/poll-dto.model';
import { Router } from '@angular/router';
import { Antwoord } from '../models/antwoord.model';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  id = parseInt(localStorage.getItem('userid'));

  //polls: PollUser[] = [];
  polls: Observable<PollDto[]>;

  constructor(private _pollService: PollService, private fb: FormBuilder, private router: Router) {
    this.pollsOphalen();
  }

  

  nieuwePoll(){
    this.router.navigate(['nieuwe-poll']);
  }

  pollsOphalen(){
    this.polls = this._pollService.getPollByUser(parseInt(localStorage.getItem('userid')));
    console.log(this.polls);
  }

  onDeletePoll(pollID){
    this._pollService.deletePoll(pollID).subscribe();
    console.log("test" + pollID);
    this.pollsOphalen();
  }

  bewerkPoll(poll){
    this.router.navigate(["bewerk-poll"], poll)
  }

  stemOptie(optie){

    let antwoord: Antwoord = {
      userID: parseInt(localStorage.getItem('userid')),
      optieID: optie.optieID
    }
    this._pollService.stemPoll(antwoord).subscribe();
    console.log(antwoord);
    this.pollsOphalen();
  }

  ngOnInit() {
  }

}
