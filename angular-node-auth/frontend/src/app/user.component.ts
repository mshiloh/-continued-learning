import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'user',
    template: `
        <mat-card class="card">
            <mat-card-content>

                <mat-form-field>
                    <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
                </mat-form-field>

                <mat-form-field>
                    <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
                </mat-form-field>

                <mat-card-actions>
                    <button mat-raised-button color="primary" (click)=saveUser(model)>Save Changes</button>
                </mat-card-actions>

            </mat-card-content>
        </mat-card>
`
})

export class UserComponent {

    model = {
        firstName: '',
        lastName: ''
    };

    constructor(private webService: WebService) { }

    ngOnItit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    saveUser(userData) {
        this.webService.saveUser(userData).subscribe();
    }
}
