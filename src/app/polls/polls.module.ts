import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material/';
import { BewerkPollComponent } from './bewerk-poll/bewerk-poll.component';
import { NieuwePollsComponent } from './nieuwe-polls/nieuwe-polls.component';



@NgModule({
  declarations: [BewerkPollComponent, NieuwePollsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class PollsModule { }
