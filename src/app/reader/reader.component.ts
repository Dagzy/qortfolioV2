import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  results: any;
  arr = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.http);

  }
  gettyClicky() {
    this.http.get('http://demo.ckan.org/api/3/action/package_search?fq=tags:economy').subscribe(data => {
      this.results = data;
      console.log(typeof(this.results));
      console.log(this.results);
    //   console.log(this.results[1].login);
    //   this.results.forEach(element => {
    //     console.log(element.login);
    //     this.arr.push(element.login);
    //   });
    // console.log(this.arr[0], this.arr[1]);
    });
  }


}
