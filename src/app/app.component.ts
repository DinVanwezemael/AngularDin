import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Polls';
  id = localStorage.getItem('userid');
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  username = localStorage.getItem('username');
  loggedIn

  alert = false;
  color = "";
  message = "";
  interval
  timeLeft: number = 7;

  constructor(){
    //controleren als user is ingelogd
    if(localStorage.getItem('userid') == null){
        this.loggedIn = false
    }
    else{
      this.loggedIn = true;
    }

    
  }

  //alert weergeven
  setAlert(message, color){
    this.timeLeft = 7;
    this.alert = true;
    this.message = message;
    this.color = color

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.alert = false;
        this.message = "";
      }
    },1000)
  }

  
//verwijderen van localStorage
  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userid');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }
}
