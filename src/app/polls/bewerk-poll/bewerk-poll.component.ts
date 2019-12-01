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
sub;
id;

  constructor(private _Activatedroute:ActivatedRoute, private _pollService: PollService, private fb: FormBuilder, private router: Router, private appComponent: AppComponent) { 
    //controle als gebruiker is ingelogd
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


  //nieuwe optie toevoegen aan poll
  nieuweOptie(){

    let optie: Optie = {
      naam: this.pollOptie.get('optie').value,
      aantalStemmen:0,
      optieID: 0,
      pollID: this.id

    }

    //poll opnieuw ophalen + tonen van alert
    this._pollService.insertOptie(optie).subscribe( result => {
      this.appComponent.setAlert("Nieuwe optie " + optie.naam + " is toegevoegd!", "success");
      this.getPoll();
    }
    );


    
  }

  //optie van poll verwijderen + tonen van alert
  verwijderOptie(optie){
    this._pollService.verwijderOptie(optie.optieID).subscribe(
      result => {
        this.appComponent.setAlert("Optie " + optie.naam + " is verwijderd!", "danger");
        this.getPoll();
      }
    );
  }


  //poll verwijderen + tonen van alert
  onDeletePoll(poll){
    this._pollService.deletePoll(poll.pollUserID).subscribe();
    this.appComponent.setAlert("Poll " + poll.naam + " is verwijderd!", "danger");
    this.router.navigate(['polls']);
  }

  

//id van de poll ophalen die we willen tonen
  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id');  
       this.getPoll();
   });
  }

}
