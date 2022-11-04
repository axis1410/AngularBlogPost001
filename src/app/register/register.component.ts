import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validator';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    registerForm: FormGroup = new FormGroup({});
    minLength = 6;

    constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) {
        this.registerForm = fb.group({
            name: ['', [Validators.required]],
            age: ['', [Validators.required, Validators.min(18)]],
            username: ['', [Validators.required, Validators.minLength(8), UsernameValidators.cannotContainSpace]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get f() {
        return this.registerForm.controls;
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    submit() {
        this.http.post<any>('http://localhost:3000/users', this.registerForm.value).subscribe((_res) => {
            this.registerForm.reset();
            alert('Successfully registered!');
            this.goToLogin();
        });
        // console.log(this.registerForm.value);
    }
}
