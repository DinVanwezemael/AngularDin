import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private authenticationService: AuthenticateService, private _Activatedroute: ActivatedRoute, private pollService: PollService) {
   

  
    
  }

  

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

  doughnutChartLabels: Label[] = this.titels;
  doughnutChartData: MultiDataSet = [
    this.data
  ];

 /*  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ]; */

  

  doughnutChartType: ChartType = 'doughnut';


  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.getPoll();

      this.polls.forEach(poll => {
        poll.forEach(pArray => {
          pArray.opties.forEach(optie => {
            data.push(optie.aantalStemmen);
            labels.push(optie.naam); 
          });
        });
      });

      let labels: string[] = [];
      let data: number[] = [];

      console.log(labels);
      console.log(data);
  });

  }

}
