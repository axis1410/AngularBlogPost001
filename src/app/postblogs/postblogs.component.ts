import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './../common/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-postblogs',
    templateUrl: './postblogs.component.html',
    styleUrls: ['./postblogs.component.scss'],
})
export class PostblogsComponent implements OnInit {
    currentUser: any = [];
    postBlogForm: FormGroup = new FormGroup({});
    blogURL: string = 'http://localhost:3000/blogPosts';

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private http: HttpClient,
        private loginService: LoginService
    ) {
        this.postBlogForm = fb.group({
            blogUser: ['', Validators.required],
            blogTitle: ['', Validators.required],
            blogContent: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        const currentUser = this.loginService.list('http://localhost:3000/currentUser/1').subscribe(
            (response) => {
                this.currentUser = response;
                console.log(this.currentUser.username);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    submitBlog() {
        if (this.currentUser.username === this.postBlogForm.value.blogUser) {
            console.log('Current user is: ', this.currentUser.username);
            console.log(this.postBlogForm.value);
            this.http.post<any>(this.blogURL, this.postBlogForm.value).subscribe(
                (res) => {
                    this.postBlogForm.reset();
                    alert(`Posted Blog as ${this.currentUser.username}`);
                    this.router.navigate(['/home']);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            alert('Enter vlaid username');
        }
    }
}
