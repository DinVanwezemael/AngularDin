import { Component, OnInit } from '@angular/core';
import { PollDto } from '../models/poll-dto.model';

@Component({
  selector: 'app-bewerk-poll',
  templateUrl: './bewerk-poll.component.html',
  styleUrls: ['./bewerk-poll.component.scss']
})
export class BewerkPollComponent implements OnInit {

poll: PollDto;

  constructor() { }

  ngOnInit() {
  }

}
