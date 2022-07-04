import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CurrentUser {
    constructor(private http: HttpClient) {}

    fetchCurrentUser(jsonURL: string, currentUser: string) {
        this.http.get(jsonURL).subscribe(
            (data) => {
                currentUser = data as string;
                console.log('Current User is : ', currentUser);
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }
}
