import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../common/services/login.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isLoggedIn!: Observable<boolean>;
    currentUser: any;
    constructor(private http: HttpClient, private loginService: LoginService) {}

    ngOnInit(): void {
        const currentUser = this.loginService.list('http://localhost:3000/currentUser/1').subscribe(
            (response) => {
                this.currentUser = response;
                this.loggedInStatus();
            },
            (err) => {
                console.log(err);
            }
        );
    }
    loggedInStatus() {
        // check if user is logged in
        if (this.currentUser) {
            return true;
        } else {
            return false;
        }
    }
}
