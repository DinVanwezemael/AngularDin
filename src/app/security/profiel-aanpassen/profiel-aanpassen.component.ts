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
    console.log(this.user);
  }

  user: Observable<User>;
  userLocal

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
    console.log(this.profielForm.value);

    this.user = this._authenticatieService.getUser(parseInt(localStorage.getItem('userid')));

    console.log(this.user);

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
    }

    );
  }

  getUser(){
    this.user = this._authenticatieService.getUser(parseInt(localStorage.getItem('userid')));
  }

  onChangePassword(){
      if(this.wachtwoordForm.controls['password'].value == this.wachtwoordForm.controls['newPasswordRepeat'].value){
        
        let user : User = {
            userID: parseInt(localStorage.getItem('userid')),
            email: localStorage.getItem('email'),
            firstName: localStorage.getItem('firstname'),
            lastName: localStorage.getItem('lastname'),
            password: this.wachtwoordForm.controls['password'].value,
            username: localStorage.getItem('username')
        }

        console.log(user);

        this._authenticatieService.changePassword(user).subscribe();
      }
      else{
        console.log("fout");
      }
  }

  ngOnInit() {
    
  }

}
