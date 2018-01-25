import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  words = 'here\'s some words';
  constructor() { }

  ngOnInit() {
    const thisSaved = this;

  }

}
