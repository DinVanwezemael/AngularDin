import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Optie } from '../models/optie.model';
import { PollDto } from '../models/poll-dto.model';

@Component({
  selector: 'app-nieuwe-polls',
  templateUrl: './nieuwe-polls.component.html',
  styleUrls: ['./nieuwe-polls.component.scss']
})
export class NieuwePollsComponent implements OnInit {


  pollForm = this.fb.group({
    pollName: ['', Validators.required],
    optie1: ['', Validators.required],
    optie2: ['', Validators.required],
    userID: [parseInt(localStorage.getItem('userid'))]
  });

  constructor(private _pollService: PollService, private fb: FormBuilder, private router: Router) {
    if(localStorage.getItem('userid') == null){
      this.router.navigate(['security']);
    }

    
    
   }


  onSubmitPoll(){


    let poll: PollDto = {
      pollName: this.pollForm.get('pollName').value,
      pollID:0,
      polluserID: 0,
      userID: this.pollForm.get('userID').value,
      username: "",
      opties: [
        {
          naam: this.pollForm.get('optie1').value,
          aantalStemmen :0,
          optieID: 0,
          pollID: 0
        },
        {
          naam: this.pollForm.get('optie2').value,
          aantalStemmen :0,
          optieID: 0,
          pollID: 0
        }
      ]
    }


    console.log(this.pollForm.value);
    console.log(this.pollForm.get('userID').value);
    this._pollService.insertPoll(poll).subscribe(
      (result) => {
      this.router.navigate(['/polls']);
    });

  }

  ngOnInit() {
  }

}
