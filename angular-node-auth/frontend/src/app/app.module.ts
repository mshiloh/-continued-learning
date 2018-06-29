import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/:name',
    component: MessagesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, HttpModule, BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSnackBarModule, MatToolbarModule
  ],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }
