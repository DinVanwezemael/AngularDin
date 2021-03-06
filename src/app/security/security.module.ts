import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material/';
import { SecurityComponent } from './security/security.component';
import { ProfielAanpassenComponent } from './profiel-aanpassen/profiel-aanpassen.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SecurityModule { }
