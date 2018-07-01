import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <mat-card>
            <mat-form-field>
                <input style="width: 350px;" [(ngModel)]="loginData.email" type="email" matInput placeholder="Email">
            </mat-form-field>

             <mat-form-field>
                 <input style="width: 350px;" [(ngModel)]="loginData.password" type="password" matInput placeholder="Password">
             </mat-form-field>

             <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
    `
})

export class LoginComponent {
    constructor(private auth: AuthService) { }

    loginData = {
        email: '',
        password: ''
    };

    login() {
        this.auth.login(this.loginData);
    }
}
