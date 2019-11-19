import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecurityModule } from './security/security.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls/polls.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security/security.component';
import { RegistreerComponent } from './registreer/registreer/registreer.component';
import { FriendComponent } from './friend/friend/friend.component';
import { BewerkPollComponent } from './polls/bewerk-poll/bewerk-poll.component';
import { NieuwePollsComponent } from './polls/nieuwe-polls/nieuwe-polls.component';
import { UitnodigenComponent } from './polls/uitnodigen/uitnodigen.component';
import { VriendVerzoekComponent } from './friend/vriend-verzoek/vriend-verzoek.component';
import { VriendToevoegenComponent } from './friend/vriend-toevoegen/vriend-toevoegen.component';
import { UitgenodigdePollsComponent } from './polls/uitgenodigde-polls/uitgenodigde-polls.component';
import { StemmenComponent } from './polls/stemmen/stemmen.component';
import { OverzichtPollComponent } from './polls/overzicht-poll/overzicht-poll.component';
import { ProfielAanpassenComponent } from './security/profiel-aanpassen/profiel-aanpassen.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'friend', component: FriendComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'registreer', component: RegistreerComponent },
  { path: 'bewerk-poll/:id', component: BewerkPollComponent },
  { path: 'nieuwe-poll', component: NieuwePollsComponent },
  { path: 'uitnodigen/:id', component: UitnodigenComponent },
  { path: 'vriend-toevoegen', component: VriendToevoegenComponent },
  { path: 'vriend-verzoek', component: VriendVerzoekComponent },
  { path: 'stemmen/:id/:uitnodigingID/:userID/:reference', component: StemmenComponent },
  { path: 'uitgenodigde-polls', component: UitgenodigdePollsComponent },
  { path: 'overzicht-poll/:id', component: OverzichtPollComponent },
  { path: 'profiel-aanpassen', component: ProfielAanpassenComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    VriendenComponent,
    HomeComponent,
    SecurityComponent,
    RegistreerComponent,
    FriendComponent,
    BewerkPollComponent,
    NieuwePollsComponent,
    UitnodigenComponent,
    VriendVerzoekComponent,
    VriendToevoegenComponent,
    UitgenodigdePollsComponent,
    StemmenComponent,
    OverzichtPollComponent,
    ProfielAanpassenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    SecurityModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
