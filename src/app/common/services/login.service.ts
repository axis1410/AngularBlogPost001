import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) {}

    list(API_URL: string) {
        // returns all users
        return this.http.get(API_URL);
    }

    create(data: any, API_URL: string): Observable<any> {
        // creates new user
        return this.http.post(API_URL, data).pipe(catchError(this.handleError));
    }

    update(id: any, data: any, API_URL: string): Observable<any> {
        // updates current user
        return this.http.put(API_URL, data, { headers: this.headers }).pipe(catchError(this.handleError));
    }

    delete(id: any, API_URL: string): Observable<any> {
        // delets current user
        const url = `${API_URL}/${id}`;
        return this.http.delete(url);
    }

    loggedInStatus(LOGIN_STATUS: boolean) {
        // Returns true if current user exists
        this.http.get('http://localhost:3000/currentuser/1').subscribe((res) => {
            if (res) {
                LOGIN_STATUS = true;
            } else {
                LOGIN_STATUS = false;
            }
        });
    }

    getLoggedInUser(): any {
        // Returns current user
        this.http.get('http://localhost:3000/currentuser/1');
    }

    handleError(error: HttpErrorResponse) {
        // Error handling
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        return throwError('Something bad happened; please try again later.');
    }
}
