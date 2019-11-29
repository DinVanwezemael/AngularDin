import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PollDto } from '../models/poll-dto.model';
import { FriendService } from 'src/app/friend/services/friend.service';
import { Uitnodiging } from '../models/uitnodiging.model';
import { Friend } from 'src/app/friend/models/friend.model';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-uitnodigen',
  templateUrl: './uitnodigen.component.html',
  styleUrls: ['./uitnodigen.component.scss']
})
export class UitnodigenComponent implements OnInit {

  poll: Observable<PollDto[]>;
  friends: Observable<Friend[]>;

  constructor(private _Activatedroute:ActivatedRoute, private _friendService: FriendService, private _pollService: PollService, private fb: FormBuilder, private router: Router, private appComponent: AppComponent) { 
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }
    this.haalVriendenOp();
  }


  getPoll(){
    this.poll = this._pollService.getPoll(parseInt(this.id));
  }

  haalVriendenOp(){
    this.friends = this._friendService.getFriendsUser(parseInt(localStorage.getItem('userid')));
  }

  vriendUitnodigen(pollID: number, friendID: number, username: string){

    let uitnodigen: Uitnodiging = {
      pollID: pollID,
      userID: friendID,
      reference: 0
    }

    this._pollService.vriendUitnodigenVoorPoll(uitnodigen).subscribe(
      result =>{
        this.appComponent.setAlert("" + username + " is uitgenodigd voor de poll!", "success");
      }
    );
  }

id

sub

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.getPoll();
  });
  }

}
