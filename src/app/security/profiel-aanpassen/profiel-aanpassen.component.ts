import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profiel-aanpassen',
  templateUrl: './profiel-aanpassen.component.html',
  styleUrls: ['./profiel-aanpassen.component.scss']
})
export class ProfielAanpassenComponent implements OnInit {

  constructor(private _authenticatieService: AuthenticateService,private app: AppComponent) {

    this.userLocal =  JSON.parse(localStorage.getItem("currentUser"));
    this.getUser();
    this.username = localStorage.getItem('username');
  }

  user: Observable<User>;
  userLocal
  username

  profielForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    userID: new FormControl(localStorage.getItem('userid')),
    password: new FormControl(''),
  });

  
  wachtwoordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newPasswordRepeat: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit(){

    this.user = this._authenticatieService.getUser(parseInt(localStorage.getItem('userid')));

//gegevens van user local opslaan
    this._authenticatieService.updateUser(this.profielForm.value).subscribe(result => {
      localStorage.setItem("currentUser", JSON.stringify(result));
      localStorage.setItem("userid", result.userID.toString());
      localStorage.setItem("username", result.username.toString());
      localStorage.setItem("firstname", result.firstName.toString());
      localStorage.setItem("lastname", result.lastName.toString());
      localStorage.setItem("email", result.email.toString());

      this.app.firstname = localStorage.getItem("firstname");
      this.app.lastname = localStorage.getItem("lastname");
      this.app.username = localStorage.getItem("username");
      this.username = localStorage.getItem('username');

      this.app.setAlert("" + this.username + ", je profiel is aangepast!", "success");
    },
    err => {
      this.app.setAlert("De gebruikersnaam bestaat al, kies een andere", "danger");
    }

    );
  }

  getUser(){
    this.user = this._authenticatieService.getUser(parseInt(localStorage.getItem('userid')));
  }

  //veranderen van wachtwoord
  onChangePassword(){
    //controleren als de 2 wachtwoorden identiek zijn
      if(this.wachtwoordForm.controls['password'].value == this.wachtwoordForm.controls['newPasswordRepeat'].value){
        
        //bestaande gegevens behouden
        let user : User = {
            userID: parseInt(localStorage.getItem('userid')),
            email: localStorage.getItem('email'),
            firstName: localStorage.getItem('firstname'),
            lastName: localStorage.getItem('lastname'),
            password: this.wachtwoordForm.controls['password'].value,
            username: localStorage.getItem('username')
        }

        //gegevens wegschrijven + tonen van alert
        this._authenticatieService.changePassword(user).subscribe(
          result =>{
            this.app.setAlert("" + this.username + ", je wachtwoord is aangepast!", "success");
          }
        );
      }
      else{
        this.app.setAlert("Je opgegeven wachtwoorden zijn niet identiek", "danger");
      }
  }

  ngOnInit() {
    
  }

}
