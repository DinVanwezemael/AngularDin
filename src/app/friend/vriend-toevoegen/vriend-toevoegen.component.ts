import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/security/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vriend-toevoegen',
  templateUrl: './vriend-toevoegen.component.html',
  styleUrls: ['./vriend-toevoegen.component.scss']
})
export class VriendToevoegenComponent implements OnInit {


  allUsers: Observable<User[]>;

  constructor(private _friendService: FriendService, private _authenticateService: AuthenticateService, private router: Router) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalAlleUsersOp();
  }

  haalAlleUsersOp(){
    this.allUsers = this._authenticateService.getAllUsers();
    console.log(this.allUsers);
  }

  ngOnInit() {
  }


}
