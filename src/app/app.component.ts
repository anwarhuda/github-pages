import { Component, OnInit } from '@angular/core';
import { Http, BrowserXhr } from '@angular/http';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: any;

  constructor(
    private progressService: NgProgress,
    private http: Http
  ){
  }

  ngOnInit(){
    const sampleUrl = 'http://slowwly.robertomurray.co.uk/delay/6000/url/https://jsonplaceholder.typicode.com/posts/1';

    this.progressService.start();
    setTimeout(() => {
      this.progressService.set(0.1);
    }, 500);
    setTimeout(() => {
      this.progressService.inc(0.2);
    }, 1000);
    this.http.get(sampleUrl)
      .subscribe((response) => {
        this.progressService.done();
        this.posts = response.json();
      });
  }
}
