import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
let validated = false;
let luser;
let myVar = '';
@Component({selector: 'app-plant-machine', templateUrl: './plant-machine.component.html', styleUrls: ['./plant-machine.component.css']})
export class PlantMachineComponent implements OnInit {

  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  ngOnInit() {

    this
      .http
      .get(this.baseUrl)
      .subscribe(res => {
        const data = res.plants;
        const plantList = document.getElementById('plantList');
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const listItem = document.createElement('li');
          const booton = document.createElement('button');
          booton.innerHTML = element;
          plantList.style.listStyleType = 'none';
          // booton.style.backgroundColor = '#4CAF50'; booton.style.border = 'none';
          // booton.style.color = 'white'; booton.style.textDecoration = 'none';
          listItem.appendChild(booton);
          plantList.appendChild(listItem);
        }
      });
  }
  submit(e) {
    console.log(e);
    this.waterPlants(luser.value);
    const schmuser = document.getElementById('luser');
    schmuser.parentElement.removeChild(schmuser);
  }
  validate() {
    // luser = prompt('Enter Name [:');
    luser = document.createElement('input');
    luser.id = 'luser';
    const schmuser = document.getElementById('validateList');
    if (schmuser.className === 'smashy') {
      console.log('this happened');
    }
    schmuser.appendChild(luser);
    schmuser.className = 'smashy';

  }
  waterPlants(rabes) {
    this
      .http
      .post(this.baseUrl, {name: rabes})
      .subscribe(res => {
        console.log(res);
        if (res.word) {
          alert(`Hey ${res.word}, how's it going?!`);
          return validated = true;
        } else {
          alert(`Welcome ${rabes}`);
          return myVar = 'somejunk';
        }
      });
  }
  checkValidated() {
    console.log(validated);
    if (!validated) {
      console.log(myVar);
      if (myVar === 'somejunk') {
        alert(myVar);
      }
      console.log('watta ya tryna do?!?!');
      setTimeout(() => this.myfunc(), 5000);
    }
    // console.log(validated);
  }
  myfunc() {
    alert('Get Outta Heeeeeeah');
    console.log('jeez');
  }
}
