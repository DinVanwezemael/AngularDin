import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from '../services/poll.service';
import { Observable } from 'rxjs';
import { PollDto } from '../models/poll-dto.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-overzicht-poll',
  templateUrl: './overzicht-poll.component.html',
  styleUrls: ['./overzicht-poll.component.scss']
})
export class OverzichtPollComponent implements OnInit {

  poll: Observable<PollDto[]>;
  sub
  id

  constructor(private _pollService: PollService, private router: Router, private _Activatedroute:ActivatedRoute) {
//controle als gebruiker is ingelogd
if(localStorage.getItem('userid') == null){
  this.router.navigate(['security']);
}
  }


  getPoll(pollID){
    this.poll = this._pollService.getPoll(pollID);
  }

  

  //id van de poll ophalen
  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');  
      this.getPoll(this.id);
  });
  }

}
