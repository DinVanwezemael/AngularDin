import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PollService } from '../services/poll.service';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { PollUser } from '../models/poll-user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  id = parseInt(localStorage.getItem('userid'));

  //polls: PollUser[] = [];
  polls: Observable<any[]>;

  constructor(private _pollService: PollService, private fb: FormBuilder) {
    this.pollsOphalen();
  }

  pollForm = new FormGroup({
    pollName: new FormControl(''),
    userID: new FormControl(parseInt(localStorage.getItem('userid')))
  });

  pollsOphalen(){
    this.polls = this._pollService.getPollByUser(parseInt(localStorage.getItem('userid')));
  }

  onSubmitPoll(){
    console.log(this.pollForm.value);
    console.log(this.pollForm.get('userID').value);
    this._pollService.insertPoll(this.pollForm.value).subscribe();
    this.pollsOphalen();
  }

  onDeletePoll(pollID){
    this._pollService.deletePoll(pollID);
    console.log("test" + pollID);
    this.pollsOphalen();
  }

  ngOnInit() {
  }

}
