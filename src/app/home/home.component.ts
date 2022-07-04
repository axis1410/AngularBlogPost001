import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LoginService } from '../common/services/login.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    allBlogs: any;
    currentUser: any = [];
    constructor(private loginService: LoginService, private router: Router, private http: HttpClient) {
        var object;
    }

    ngOnInit(): void {
        const currentUser = this.loginService.list('http://localhost:3000/currentUser/1').subscribe(
            (response) => {
                this.currentUser = response;
            },
            (err) => {
                console.log(err);
            }
        );
        console.log('Current User: ', currentUser);

        this.http.get('http://localhost:3000/blogPosts').subscribe(
            // fetches all existing blogs
            (data) => {
                this.allBlogs = data as string[];
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
    }

    postNewBlogPage() {
        // navigate to post new blog page if user is logged in
        if (this.currentUser.id === 1) {
            console.log('Current User exists');
            console.log(this.currentUser.id);
            this.router.navigate(['/postBlogs']);
        } else {
            alert('You must be logged in to create blog');
            this.router.navigate(['/login']);
        }
    }
}
