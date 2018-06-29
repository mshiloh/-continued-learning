import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
            <button class="nav" mat-button routerLink="/">Message Board</button>
            <button class="nav" mat-button routerLink="/messages">Messages</button>
        </mat-toolbar>
    `
})

export class NavComponent {
    constructor() { }
}
