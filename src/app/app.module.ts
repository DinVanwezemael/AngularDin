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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'friend', component: FriendComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'registreer', component: RegistreerComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    VriendenComponent,
    HomeComponent,
    SecurityComponent,
    RegistreerComponent,
    FriendComponent
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
