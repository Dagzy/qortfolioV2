import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggle = true;
  constructor() {
  }
  ngOnInit() {
    if (window.localStorage.getItem('navvy')) {
      this.flipper();
    }
  }
  colorToggle() {
    if (window.localStorage.getItem('navvy')) {
      window.localStorage.removeItem('navvy');
      this.flippy();
    } else {
      window.localStorage.setItem('navvy', 'navvy');
      this.flipper();
    }
  }
  toggAlert() {
    console.log(this.toggle);
  }
  flipper() {
    const togs = document.getElementById('navvy');
    const toogs = document.getElementById('logo');
    const querk = document.getElementById('quirk');
    togs.classList.remove('colory');
    togs.classList.add('colorify');
    toogs.classList.remove('logo');
    toogs.classList.add('logo2');
    querk.classList.remove('quirk1');
    querk.classList.add('quirk2');
  }
  flippy() {
    const togs = document.getElementById('navvy');
    const toogs = document.getElementById('logo');
    const querk = document.getElementById('quirk');
    togs.classList.remove('colorify');
    togs.classList.add('colory');
    toogs.classList.remove('logo2');
    toogs.classList.add('logo');
    querk.classList.remove('quirk2');
    querk.classList.add('quirk1');
  }
}
