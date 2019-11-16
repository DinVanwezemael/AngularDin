import { Component, OnInit } from '@angular/core';
import { User } from '../security/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  naam: string;
  currentUser: User;

  constructor(private router: Router) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
  }

  ngOnInit() {
  }

}
