import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor='let message of webService.messages | async'>
            <mat-card class="card">
                <mat-card-title [routerLink]="['/messages', message.owner]">{{message.owner}}</mat-card-title>
                <mat-card-content>{{message.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

export class MessagesComponent {

    messages;

    constructor(private webService: WebService, private route: ActivatedRoute) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        const name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
    }
}
