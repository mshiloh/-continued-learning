import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:2002/api';

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages();
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError('Sorry, we are currently unable to get your messages.');
        });
    }

    async postMessage(message) {
        try {
            const response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError('Sorry, we are currently unable to post your message.');
        }

    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 3000 });
    }
}
