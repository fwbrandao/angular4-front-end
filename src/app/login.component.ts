import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "login",
  template: `
    <mat-card>
    <mat-card-header>
    <mat-card-title>
    <h4>Loggin</h4>
    </mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <form>
    <mat-input-container>
    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email">
    </mat-input-container>
    <mat-input-container>
    <input [(ngModel)]="loginData.password" name="password" matInput placeholder="password" type="password">
    </mat-input-container>
    <button (click)="post()" mat-raised-button color="amber">Login</button>
    </form>
    </mat-card-content>
    </mat-card>
    `
})
export class LoginComponent {
  loginData = {};

  constructor(private authService: AuthService) {}

  post() {
    this.authService.loginUser(this.loginData);
  }
}
