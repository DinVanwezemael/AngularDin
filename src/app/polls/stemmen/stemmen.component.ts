import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';
import { Antwoord } from '../models/antwoord.model';
import { Uitnodiging } from '../models/uitnodiging.model';

@Component({
  selector: 'app-stemmen',
  templateUrl: './stemmen.component.html',
  styleUrls: ['./stemmen.component.scss']
})
export class StemmenComponent implements OnInit {

  poll: Observable<PollDto[]>;
  pollEnkel: Observable<PollDto>;
  uitnodiging: Observable<Uitnodiging>;

  constructor(private _pollService: PollService, private router: Router, private _Activatedroute:ActivatedRoute) {
    console.log(this.reference);
  }


  getPoll(pollID){
    this.poll = this._pollService.getPoll(pollID);
  }

  getPollEnkel(pollID){
    this.pollEnkel = this._pollService.getPollEnkel(pollID);
  }

  stemOptie(optie, pollID: number){

    let antwoord: Antwoord = {
      userID: parseInt(localStorage.getItem('userid')),
      optieID: optie.optieID
    }
    this._pollService.stemPoll(antwoord).subscribe();

    this.getPollEnkel(parseInt(localStorage.getItem('userid')));

    let uitnodiging: any = {
      pollID: this.id,
      reference: optie.optieID,
      userID: this.userID,
      uitnodigingID: this.uitnodigingID
    } 

    this._pollService.updateUitnodiging(uitnodiging).subscribe();

    console.log(pollID);
    this.router.navigate(['overzicht-poll', pollID]);
  }

  sub
  id
  uitnodigingID
  userID
  reference

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.uitnodigingID = params.get('uitnodigingID');  
      this.userID = params.get('userID');  
      this.reference = params.get('reference');  
      this.getPoll(this.id);

      console.log(this.id + " " + this.uitnodigingID + " " + this.userID + " " + this.reference);
  });
  }

}
