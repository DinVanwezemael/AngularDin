import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'projectDin';
  id = localStorage.getItem('userid');
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  username = localStorage.getItem('username');
  loggedIn

  constructor(){
    if(localStorage.getItem('userid') == null){
        this.loggedIn = false
    }
    else{
      this.loggedIn = true;
    }
  }
  

  logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userid');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('username');
  }
}
