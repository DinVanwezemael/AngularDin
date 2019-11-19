import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profiel-aanpassen',
  templateUrl: './profiel-aanpassen.component.html',
  styleUrls: ['./profiel-aanpassen.component.scss']
})
export class ProfielAanpassenComponent implements OnInit {

  constructor(private _authenticatieService: AuthenticateService) {
    this.getUser();
    console.log(this.user);
  }

  user: Observable<User>;

  profielForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  getUser(){
    this.user = this._authenticatieService.getUser(parseInt(localStorage.getItem('userid')));
  }

  ngOnInit() {
    
  }

}
