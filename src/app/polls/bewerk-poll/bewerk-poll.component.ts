import { Component, OnInit } from '@angular/core';
import { PollDto } from '../models/poll-dto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from '../services/poll.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Optie } from '../models/optie.model';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-bewerk-poll',
  templateUrl: './bewerk-poll.component.html',
  styleUrls: ['./bewerk-poll.component.scss']
})
export class BewerkPollComponent implements OnInit {

poll: Observable<PollDto[]>;

  constructor(private _Activatedroute:ActivatedRoute, private _pollService: PollService, private fb: FormBuilder, private router: Router, private appComponent: AppComponent) { 
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.getPoll();
  }

  pollOptie = new FormGroup({
    optie: new FormControl('', Validators.required)
  });

  getPoll(){
    this.poll = this._pollService.getPoll(parseInt(this.id));
  }

  nieuweOptie(){

    let optie: Optie = {
      naam: this.pollOptie.get('optie').value,
      aantalStemmen:0,
      optieID: 0,
      pollID: this.id

    }

    this._pollService.insertOptie(optie).subscribe( result => {
      this.appComponent.setAlert("Nieuwe optie " + optie.naam + " is toegevoegd!", "success");
      this.getPoll();
    }
    );


    
  }

  verwijderOptie(optie){
    this._pollService.verwijderOptie(optie.optieID).subscribe(
      result => {
        this.appComponent.setAlert("Optie " + optie.naam + " is verwijderd!", "danger");
        this.getPoll();
      }
    );

    this.getPoll();
    this.getPoll();
  }

  onDeletePoll(poll){
    this._pollService.deletePoll(poll.pollUserID).subscribe();
    this.appComponent.setAlert("Poll " + poll.naam + " is verwijderd!", "danger");
    this.router.navigate(['polls']);
  }

  sub;

  id;


  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id');  
       this.getPoll();
   });
  }

}
