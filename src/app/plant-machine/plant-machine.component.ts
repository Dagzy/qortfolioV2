import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({selector: 'app-plant-machine', templateUrl: './plant-machine.component.html', styleUrls: ['./plant-machine.component.css']})
export class PlantMachineComponent implements OnInit {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let luser = prompt('Who goes there?!');
    luser = luser.toLowerCase();
    this.http.post(this.baseUrl, {name: luser}).subscribe(res => {
      const data = res.plants;
      console.log(res);
      const plantList = document.getElementById('plantList');
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const listItem = document.createElement('li');
        const booton = document.createElement('button');
        booton.innerHTML = element;
        plantList.style.listStyleType = 'none';
        booton.style.backgroundColor = '#4CAF50';
        booton.style.border = 'none';
        booton.style.color = 'white';
        booton.style.textDecoration = 'none';
        listItem.appendChild(booton);
        plantList.appendChild(listItem);
      }
    });
  }
}
