import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';
import { Antwoord } from '../models/antwoord.model';

@Component({
  selector: 'app-stemmen',
  templateUrl: './stemmen.component.html',
  styleUrls: ['./stemmen.component.scss']
})
export class StemmenComponent implements OnInit {

  poll: Observable<PollDto[]>;

  constructor(private _pollService: PollService, private router: Router, private _Activatedroute:ActivatedRoute) {

  }


  getPoll(pollID){
    this.poll = this._pollService.getPoll(pollID);
  }

  stemOptie(optie, pollID: number){

    let antwoord: Antwoord = {
      userID: parseInt(localStorage.getItem('userid')),
      optieID: optie.optieID
    }
    this._pollService.stemPoll(antwoord).subscribe();

    console.log(pollID);
    this.router.navigate(['overzicht-poll', pollID]);
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
