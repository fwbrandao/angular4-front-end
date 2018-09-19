import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  messages = [];
  tests = [];

  constructor( private http: Http) {}

  getMessages() {
    this.http.get('http://localhost:3000/messages').subscribe(res => {
      this.messages = res.json();
    });
  }

  getTests() {
    this.http.get('http://localhost:3000/tests').subscribe(res => {
      this.tests = res.json();
    });
  }
}
