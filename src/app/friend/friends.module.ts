import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendVerzoekComponent } from './vriend-verzoek/vriend-verzoek.component';
import { VriendToevoegenComponent } from './vriend-toevoegen/vriend-toevoegen.component';



@NgModule({
  declarations: [VriendVerzoekComponent, VriendToevoegenComponent],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
