import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Userlogin } from '../models/userlogin.model';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { NavigatieComponent } from '../../navigatie/navigatie.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  

  constructor(private _authenticateService : AuthenticateService, private formBuilder: FormBuilder, private router: Router, private app: AppComponent) {
    //controleren als user in ingelogd
    if(localStorage.getItem("userid") != null){
      app.loggedIn = true;
      this.router.navigate[('home')];
      
    }

  }

  loggedIn
  error

  loginForm = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });



  onSubmit(){

    //gegevens van user local opslaan
    this._authenticateService.authenticate(this.loginForm.value).subscribe(result => {
      localStorage.setItem("currentUser", JSON.stringify(result));
      localStorage.setItem("userid", result.userID.toString());
      localStorage.setItem("username", result.username.toString());
      localStorage.setItem("firstname", result.firstName.toString());
      localStorage.setItem("lastname", result.lastName.toString());
      localStorage.setItem("email", result.email.toString());
      this.app.loggedIn = true;

      this.app.firstname = result.firstName.toString();
      this.app.lastname = result.lastName.toString();
      this.app.username = result.username.toString();
      this.app.id = result.userID.toString();
      this.app.loggedIn = true;
    this.router.navigate(['']);
  },
  err => {
    this.app.setAlert("De gebruikersnaam of wachtwoord is fout", "danger");
    this.app.loggedIn = false;
  }
  );
  }


  registreer(){
    this.router.navigate(['/registreer']);
  }

  ngOnInit() {
    
}



  

  

}
