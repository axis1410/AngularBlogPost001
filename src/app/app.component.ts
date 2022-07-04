import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from './common/Classes/user.interface';
import { LoginService } from './common/services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'food-blog';
    users: UserInterface[] = [];
    loggedIn: boolean = false;

    constructor(private http: HttpClient, private loginService: LoginService) {}

    ngOnInit(): void {
        console.log('Logged In Status: ', this.loggedIn);
        this.http.get('http://localhost:3000/users').subscribe((res) => {
            this.users = res as UserInterface[];
        });

        this.http.delete('http://localhost:3000/currentuser/1').subscribe(
            () => console.log('Current User List Cleared'),
            (err) => console.log(err)
        );

        this.loginService.loggedInStatus(this.loggedIn);
        console.log('Logged In Status: ', this.loggedIn);
    }

    addUser(name: string): void {
        const uniqueId = Number(Math.random().toString(16));
        const newUser: UserInterface = {
            id: uniqueId,
            name,
            username: '',
            password: '',
        };
        this.users.push(newUser);
    }

    removeUser(id: number): void {
        this.users = this.users.filter((user) => user.id !== id);
    }
}
