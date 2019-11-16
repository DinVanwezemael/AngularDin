import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material/';
import { BewerkPollComponent } from './bewerk-poll/bewerk-poll.component';
import { NieuwePollsComponent } from './nieuwe-polls/nieuwe-polls.component';
import { UitnodigenComponent } from './uitnodigen/uitnodigen.component';
import { UitgenodigdePollsComponent } from './uitgenodigde-polls/uitgenodigde-polls.component';
import { StemmenComponent } from './stemmen/stemmen.component';
import { OverzichtPollComponent } from './overzicht-poll/overzicht-poll.component';



@NgModule({
  declarations: [BewerkPollComponent, NieuwePollsComponent, UitnodigenComponent, UitgenodigdePollsComponent, StemmenComponent, OverzichtPollComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class PollsModule { }
