import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Component({
  selector: 'app-navigatie',
  templateUrl: './navigatie.component.html',
  styleUrls: ['./navigatie.component.scss']
})
export class NavigatieComponent implements OnInit {

  constructor() { }

  firstname
  lastname
  username

  ngOnInit() {
  }

}
