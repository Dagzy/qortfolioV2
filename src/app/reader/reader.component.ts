import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  results: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.http);

  }
  gettyClicky() {
    this.http.get('https://swapi.co/api/people').subscribe(data => {
      this.results = data['results'];
      console.log(this.results[2].name);
    });
  }

}
