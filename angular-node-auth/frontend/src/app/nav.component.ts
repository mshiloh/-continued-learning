import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button class="nav" mat-button routerLink="/">Message Board</button>
            <button class="nav" mat-button routerLink="/messages">Messages</button>
            <span style="flex: 1 1 auto;"></span>
            <button *ngIf="!auth.isAuthenticated" class="nav" mat-button routerLink="/login">Login</button>
            <button *ngIf="!auth.isAuthenticated" class="nav" mat-button routerLink="/register">Register</button>
            <button *ngIf="auth.isAuthenticated" class="nav" mat-button routerLink="/user">Welcome {{auth.name}}</button>
            <button *ngIf="auth.isAuthenticated" class="nav" mat-button (click)="auth.logout()">Logout</button>
        </mat-toolbar>
    `
})

export class NavComponent {
    constructor(private auth: AuthService) { }
}
