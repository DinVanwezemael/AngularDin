import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../services/poll.service';
import { PollDto } from '../models/poll-dto.model';
import { Observable } from 'rxjs';

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
  colors : string[] = [];

  getPoll(){
    this.polls = this.pollService.getPoll(this.id);
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
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
            this.colors.push(
              this.getRandomColor()
            );
          });
        });
      });
  });
  }

}
