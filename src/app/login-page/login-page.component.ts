import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validator';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../common/services/currentUser.service';
import { LoginService } from '../common/services/login.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    constructor(
        private loginService: LoginService,
        private CurrentUserService: CurrentUser,
        private router: Router,
        private http: HttpClient
    ) {}

    loginStatus: boolean = false;

    minLength = 6;
    currentUser!: string;
    currentUserURL = 'http://localhost:3000/currentUser/1'; // URL listing current user
    usersURL = 'http://localhost:3000/users'; // URL listing all users

    ngOnInit(): void {}

    form = new FormGroup({
        // form group
        username: new FormControl('', [
            UsernameValidators.cannotContainSpace,
            Validators.required,
            Validators.minLength(6),
        ]),
        password: new FormControl('', Validators.required),
    });
    get username() {
        // getter for username
        return this.form.get('username');
    }

    get password() {
        // getter for password
        return this.form.get('password');
    }

    get f() {
        // getter for form
        return this.form.controls;
    }

    goToRegister() {
        // register button
        this.router.navigate(['/register']);
    }

    login() {
        // login button
        this.http.delete(this.currentUserURL).subscribe(
            () => console.log('Current User List Cleared'),
            (err) => console.log(err)
        );
        this.http.get<any>(this.usersURL).subscribe(
            (res) => {
                const user = res.find((a: any) => {
                    return a.username === this.form.value.username && a.password === this.form.value.password;
                });
                if (user) {
                    this.http.post<any>('http://localhost:3000/currentuser', this.form.value).subscribe(res);
                    console.log(this.form.value);
                    this.loginStatus = true;
                    this.router.navigate(['/home']);
                    this.form.reset();
                } else {
                    alert('Invalid credentials');
                }
            },
            (err) => {
                alert('Something went wrong');
            }
        );
    }

    onDelete() {
        this.loginService.delete(1, this.currentUserURL);
    }

    get _loginInStatus() {
        return this.loginStatus;
    }
}
