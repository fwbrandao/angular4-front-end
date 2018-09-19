import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
    //BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
