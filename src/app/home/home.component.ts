import { Component, OnInit } from '@angular/core';
import { User } from '../security/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  naam: string;
  currentUser: User;

  constructor() {
  }

  ngOnInit() {
  }

}
