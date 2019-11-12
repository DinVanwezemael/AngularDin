import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../security/models/user.model';

import { AuthenticateService } from '../../security/services/authenticate.service';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.scss']
})
export class RegistreerComponent implements OnInit {

  submitted : boolean = false;
  registreerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private _authenticatieService: AuthenticateService, private router: Router) { }

  onSubmit(){
    console.log('hier geweest');
    this._authenticatieService.insert(this.registreerForm.value).subscribe();
    this.router.navigate(['/security']);
  }

  login(){
    this.router.navigate(['/security']);
  }

  ngOnInit() {
  }

}
