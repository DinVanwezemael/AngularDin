import { Component, OnInit } from '@angular/core';
import { User } from '../security/models/user.model';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  naam
  currentUser: User;

  constructor(private router: Router, private appcomponent: AppComponent) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }

    this.naam = localStorage.getItem('username');

    this.appcomponent.id = localStorage.getItem('userid');
  }

  ngOnInit() {
  }

}
