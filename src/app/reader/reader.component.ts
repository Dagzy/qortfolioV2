import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  results: any;
  data = {img: ''};
  arr = [];
  objy = {piccy: ''};
  API_BASE = 'https://xkcd.now.sh/';
  plicky: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.API_BASE).subscribe(data => {
      data = data;
      this.results = data;
      this.plicky = this.results.img;
      const quicky = document.getElementById('picz');
      quicky.setAttribute('src', this.plicky);
    });
  }
  gettyClicky() {
    let n = Math.random();
    n = n += .5;
    n = n * 1000;
    n = Math.floor(n);
    this.http.get(this.API_BASE + n).subscribe(data => {
    this.results = data;
    const quicky = document.getElementById('picz');
    quicky.setAttribute('src', this.results.img);

    });
  }


}
