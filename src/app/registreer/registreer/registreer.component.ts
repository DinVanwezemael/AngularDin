import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../security/models/user.model';

import { AuthenticateService } from '../../security/services/authenticate.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.component.html',
  styleUrls: ['./registreer.component.scss']
})
export class RegistreerComponent implements OnInit {

  registreerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private _authenticatieService: AuthenticateService, private router: Router, private appComponent: AppComponent) { }

  onSubmit(){

    //nieuwe user aanmaken
    this._authenticatieService.insert(this.registreerForm.value).subscribe(
      result => {
      this.appComponent.setAlert("" + this.registreerForm.get('username').value + ", je profiel is succesvol aangemaakt!", "success");
      this.router.navigate(['/security']);
      },
      //alert tonen wanneer het registreren niet gelukt is
      err => {
        this.appComponent.setAlert("De gebruikersnaam is al bezet, kies een andere", "danger");
      }
    );
    
  }

  login(){
    this.router.navigate(['/security']);
  }

  ngOnInit() {
  }

}
