import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "users",
  template: `
  <div *ngFor="let user of apiService.users">
  <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.email}}</mat-card>
</div>
`
})
export class UsersComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers();
  }
}
