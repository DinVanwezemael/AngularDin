import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from '../services/poll.service';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';
import { Optie } from '../models/optie.model';

@Component({
  selector: 'app-uitkomst-poll',
  templateUrl: './uitkomst-poll.component.html',
  styleUrls: ['./uitkomst-poll.component.scss']
})
export class UitkomstPollComponent implements OnInit {

  constructor(private authenticationService: AuthenticateService, private _Activatedroute: ActivatedRoute, private pollService: PollService, private router: Router) {}

  

  sub
  id

  polls: Observable<PollDto[]>;
  titels: string[] = [];
  data : number[] = [];
  poll: any[];
  opties: Optie[] = [];

  
  

  getPoll(){
    this.polls = this.pollService.getPoll(this.id);
  }

  back(){
    this.router.navigate(['/uitgenodigde-polls']);
  }

  doughnutChartLabels: Label[] = this.titels;
  doughnutChartData: MultiDataSet = [
    this.data
  ];


  

  doughnutChartType: ChartType = 'doughnut';


  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.getPoll();

      this.polls.forEach(poll => {
        poll.forEach(pArray => {
          pArray.opties.forEach(optie => {
            this.data.push(optie.aantalStemmen);
            this.titels.push(optie.naam); 
          });
        });
      });
  });

  }

}
