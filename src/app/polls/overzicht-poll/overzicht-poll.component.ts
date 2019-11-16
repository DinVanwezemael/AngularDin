import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from '../services/poll.service';
import { Observable } from 'rxjs';
import { PollDto } from '../models/poll-dto.model';

@Component({
  selector: 'app-overzicht-poll',
  templateUrl: './overzicht-poll.component.html',
  styleUrls: ['./overzicht-poll.component.scss']
})
export class OverzichtPollComponent implements OnInit {

  poll: Observable<PollDto[]>;

  constructor(private _pollService: PollService, private router: Router, private _Activatedroute:ActivatedRoute) {

  }


  getPoll(pollID){
    this.poll = this._pollService.getPoll(pollID);
  }

  sub

  id

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');  
      this.getPoll(this.id);
  });
  }

}
