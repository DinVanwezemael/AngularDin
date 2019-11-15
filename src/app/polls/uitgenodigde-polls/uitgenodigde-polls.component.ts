import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';
import { Antwoord } from '../models/antwoord.model';

@Component({
  selector: 'app-uitgenodigde-polls',
  templateUrl: './uitgenodigde-polls.component.html',
  styleUrls: ['./uitgenodigde-polls.component.scss']
})
export class UitgenodigdePollsComponent implements OnInit {

  uitgenodigdePolls: Observable<PollDto[]>

  constructor(private _pollService: PollService) {
    this.haalUitgenodigdePollsOp();
  }

  haalUitgenodigdePollsOp(){
    this.uitgenodigdePolls = this._pollService.uitgenodigdePolls(parseInt(localStorage.getItem('userid')));
  }

  stemOptie(optie){

    let antwoord: Antwoord = {
      userID: parseInt(localStorage.getItem('userid')),
      optieID: optie.optieID
    }
    this._pollService.stemPoll(antwoord).subscribe();
    this.haalUitgenodigdePollsOp();
  }

  ngOnInit() {
  }

}
