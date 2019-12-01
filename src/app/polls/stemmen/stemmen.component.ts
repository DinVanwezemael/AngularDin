import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';
import { Antwoord } from '../models/antwoord.model';
import { Uitnodiging } from '../models/uitnodiging.model';
import { Poll } from '../models/poll.model';

@Component({
  selector: 'app-stemmen',
  templateUrl: './stemmen.component.html',
  styleUrls: ['./stemmen.component.scss']
})
export class StemmenComponent implements OnInit {

  poll: Observable<PollDto[]>;
  uitnodiging: Observable<Uitnodiging>;
  voted

  constructor(private _pollService: PollService, private router: Router, private _Activatedroute:ActivatedRoute) {
  }


  getPoll(pollID){
    this.poll = this._pollService.getPoll(pollID);
  }

//stem uitbrengen
  stemOptie(optie, pollID: number){

    let antwoord: Antwoord = {
      userID: parseInt(localStorage.getItem('userid')),
      optieID: optie.optieID
    }
    

    let uitnodiging: any = {
      pollID: this.id,
      reference: optie.optieID,
      userID: this.userID,
      uitnodigingID: this.uitnodigingID
    } 

    //uitnodiging updaten zodat user niet opnieuw kan stemmen
    this._pollService.updateUitnodiging(uitnodiging).subscribe();

    this._pollService.stemPoll(antwoord).subscribe(
      result => {
        this.router.navigate(['uitkomst-poll', pollID]);
      }
    );
    
  }

  uitslag(pollID: number){
    this.router.navigate(['uitkomst-poll', pollID]);
  }

  sub
  id
  uitnodigingID
  userID
  reference
  notvoted


  //ophalen van pollid, uitnodigingid, userid, reference
  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.uitnodigingID = params.get('uitnodigingID');  
      this.userID = params.get('userID');  
      this.reference = params.get('reference');

      this.poll = this._pollService.getPoll(this.id);
      

      //als reference groter is als 0 is er als gestemd op de poll
      if(this.reference > 0){
        this.voted = true;
        this.notvoted = false;
      }
      else{
        this.notvoted = true;
        this.voted = false;
      }

  });
  }

}
