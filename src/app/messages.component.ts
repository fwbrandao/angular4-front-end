import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'messages',
  template: `<div *ngFor="let message of apiService.messages">
  <mat-card>{{message.message}}</mat-card>
</div>
<div *ngFor="let test of apiService.tests">
  <mat-card>{{test.test}}</mat-card>
</div>
<div *ngFor="let starWars of apiService.starWars">
  <mat-card>{{starWars.good}} {{starWars.bads}}</mat-card>
</div>
`
})
export class MessagesComponent {

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessages();
    this.apiService.getTests();
    this.apiService.getStarWars();
  }
}
